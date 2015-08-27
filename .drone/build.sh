#!/bin/bash

set -e

sudo start xvfb

# [Docker] make echo
make echo

# [Docker] Requirements
# make install dependences

# [Docker] Local tests
make test

case $DRONE_BRANCH in
    master|release)
        echo *$DRONE_BRANCH* merge pull request or push release
        ;;

    *)
        echo *$DRONE_BRANCH* pull request, all checks have passed
        ;;
esac
