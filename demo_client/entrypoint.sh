#!/bin/sh

sed --in-place "s|</head>|<script>window.__env = { authTokenAgent: \"$AUTH_TOKEN_AGENT\", apiClientId: \"$API_CLIENT_ID\" };</script></head>|" /usr/share/nginx/html/index.html

# Execute the CMD from the Dockerfile
exec "$@"