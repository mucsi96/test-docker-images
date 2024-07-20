#!/bin/sh

sed --in-place "s|</head>|<script>window.__env = { tokenAgent: \"$TOKEN_AGENT\" };</script></head>|" /usr/share/nginx/html/index.html

# Execute the CMD from the Dockerfile
exec "$@"