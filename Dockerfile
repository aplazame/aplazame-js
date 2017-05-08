FROM aplazame/nodejs-karma:0.5.0

# Workaround for docker volumes
ENV CHOKIDAR_USEPOLLING=1

ADD . /project

WORKDIR /project

ENTRYPOINT sed -i "s/git@github.com:/http:\/\/${GITHUB_TOKEN}:x-oauth-basic@github.com\//g" bower.json; \
    sed -i "s/git+ssh:\/\/github.com\/aplazame\//https:\/\/${GITHUB_TOKEN}:x-oauth-basic@github.com\/aplazame\//g" package.json; \
    make live
