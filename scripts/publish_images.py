#!/usr/bin/env python3

from os import environ
import sys
from pathlib import Path
from publish_tools import ansible_utils, docker_utils, version_utils

root_directory = Path(__file__).parent.parent
secrets = ansible_utils.load_vars(sys.argv[2], root_directory / 'vars/vault.yaml')
username = environ.get('GITHUB_REPOSITORY_OWNER')

if username == None:
    print("GitHub username is missing", flush=True, file=sys.stderr)
    exit(1)
    
version= version_utils.get_version(
    src=root_directory / 'hello_client',
    tag_prefix="hello-client",
)

docker_utils.build_and_push_docker_img(
    src=root_directory / 'hello_client',
    version=version,
    tag_prefix="hello-client",
    image_name="hello-client",
    docker_username=username,
    docker_password=secrets['docker_password'],
    github_access_token=sys.argv[1]
)