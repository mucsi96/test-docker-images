#!/bin/sh

sed --in-place "s|</head>|<script>window.__env = { authTokenAgent: \"$AUTH_TOKEN_AGENT\", authScopes: \"$AUTH_SCOPES\".split(',') };</script></head>|" /usr/share/nginx/html/index.html

# Execute the CMD from the Dockerfile
exec "$@"