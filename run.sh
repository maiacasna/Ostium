#!/usr/bin/env bash
set -e

# Project settings
PORT=8000
INDEX="index.html"

# Start simple HTTP server in background
python3 -m http.server "$PORT"

# Give the server a moment to start
# sleep 1

# # Open Chrome on the local URL
# open -a "Google Chrome" "http://localhost:${PORT}/${INDEX}"