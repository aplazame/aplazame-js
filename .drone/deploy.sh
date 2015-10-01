#!/bin/bash

# [DOCKER] Install deployment requirements
sudo pip install fabric


case $DRONE_BRANCH in
    master)
        echo master deploy to debug
        fab prod deploy:$DEBUG_PATH,master
        fab prod make:$DEBUG_PATH,build
        ;;

    release)
        echo release deploy to production
        fab prod deploy:$RELEASE_PATH,release
        ;;
esac
