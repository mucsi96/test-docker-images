#!/usr/bin/env python3

from os import environ
import sys
from pathlib import Path
from publish_tools import ansible_utils, docker_utils, version_utils

root_directory = Path(__file__).parent.parent
secrets = ansible_utils.load_vars(sys.argv[2], root_directory / "vars/vault.yaml")
username = environ.get("GITHUB_REPOSITORY_OWNER")

if username == None:
    print("GitHub username is missing", flush=True, file=sys.stderr)
    exit(1)

for package in [
    {"tag-prefix": "hello-client", "src": root_directory / "hello_client"},
    {"tag-prefix": "demo-client", "src": root_directory / "demo_client"},
    {"tag-prefix": "demo-server", "src": root_directory / "demo_server"},
]:
    version = version_utils.get_version(
        src=package["src"], tag_prefix=package["tag-prefix"]
    )

    docker_utils.build_and_push_docker_img(
        src=package["src"],
        version=version,
        tag_prefix=package["tag-prefix"],
        image_name=package["tag-prefix"],
        docker_username=username,
        docker_password=secrets["docker_password"],
        github_access_token=sys.argv[1],
    )
