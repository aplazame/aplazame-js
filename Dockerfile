FROM aplazame/nodejs-karma:0.5.0

ARG GITHUB_TOKEN

# Workaround for docker volumes
ENV CHOKIDAR_USEPOLLING=1

RUN echo "machine github.com login $GITHUB_TOKEN" > ~/.netrc

WORKDIR /project

ADD [".bowerrc", "bower.json", "./"]
RUN bower install --allow-root

ADD ["package.json", "npm-shrinkwrap.json", "./"]
RUN npm install

ADD . ./
