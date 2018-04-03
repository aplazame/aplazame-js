FROM aplazame/nodejs-karma:0.5.0

ARG GITHUB_TOKEN

# Workaround for docker volumes
ENV CHOKIDAR_USEPOLLING=1

RUN echo "machine github.com login $GITHUB_TOKEN" > ~/.netrc

WORKDIR /project

ADD [".bowerrc", "bower.json", "./"]
RUN sed -i "s/git@github.com:/http:\/\/${GITHUB_TOKEN}:x-oauth-basic@github.com\//g" bower.json; \
  bower install --allow-root > /dev/null 2>&1

ADD ["package.json", "package-lock.json", "./"]
RUN npm install

ADD . ./

RUN sed -i "s/git@github.com:/http:\/\/${GITHUB_TOKEN}:x-oauth-basic@github.com\//g" bower.json
