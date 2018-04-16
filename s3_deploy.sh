#!/bin/bash

if [ -z "$CI_BRANCH" ]; then
  export CI_BRANCH=$(git rev-parse --abbrev-ref HEAD)
fi

echo "branch $CI_BRANCH"

function push2s3 () {
  public_dest='aplazame-js/public'

  aws s3 sync --acl private \
      --cache-control "private, max-age:3600" \
      --delete public s3://$1/$public_dest;

  aws s3api put-object --acl private \
      --bucket $1 \
      --cache-control "no-cache, no-store" \
      --content-type "text/html; charset=utf-8" \
      --key $public_dest/index.html \
      --body public/index.html;
}

if [ "$CI_BRANCH" == "master" ]; then

  push2s3 aplazame-demo-landing

elif [ "$CI_BRANCH" == "release" ]; then

  push2s3 aplazame-frontend

fi
