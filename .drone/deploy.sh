#!/bin/bash

# [DOCKER] Install deployment requirements
sudo pip install fabric

# [PRODUCTION] make echo
fab prod echo

# [PRODUCTION] deploy
# make deploy host=prod
fab prod deploy
