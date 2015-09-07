#!/bin/bash

# [DOCKER] Install deployment requirements
sudo pip install fabric


case $DRONE_BRANCH in
    master)
        echo master deploy to debug
        fab prod deploy:$DEBUG_PATH,master
        fab prod echo:$DEBUG_PATH
        ;;

    release)
        echo release deploy to production
        fab prod deploy:$RELEASE_PATH,release
        fab prod echo:$RELEASE_PATH
        ;;
esac
