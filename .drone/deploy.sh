#!/bin/bash

case $DRONE_BRANCH in
    release)
        echo release deployment

        # [DOCKER] Install deployment requirements
        sudo pip install fabric

        # [PRODUCTION] make echo
        fab prod echo

        # [PRODUCTION] deploy
        # make deploy host=prod
        fab prod deploy

        ;;

    *)
        echo *$DRONE_BRANCH* ci
        ;;
esac
