#!/bin/bash

set -e 

# [Docker] make echo
make echo

# Requirements
# make install dependences

# Local tests
# make test

case $DRONE_BRANCH in
    master|release)
        echo *$DRONE_BRANCH* merge pull request or push release
        ;;

    *)
        echo *$DRONE_BRANCH* pull request, all checks have passed
        ;;
esac
