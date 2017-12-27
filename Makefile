# --- aplazame-js

npmdir = $(shell npm bin)
whoami = $(shell whoami)

git_branch := $(shell git rev-parse --abbrev-ref HEAD)

# TASKS

git.hooks:
	@./bin/git-hooks

bower-install:
	@echo "running bower install"
	@$(npmdir)/bower install --allow-root > /dev/null 2>&1

npm-install:
	@echo "running npm install"
	@npm install > /dev/null 2>&1

install: git.hooks npm-install bower-install

tests:
	@$(npmdir)/eslint src/**
	@$(npmdir)/mocha src/**/*-tests.js

test-tools:
	@$(npmdir)/watch "date +\"%Y-%m-%d %T\" && $(npmdir)/mocha -R spec tests" src/tools tests

build: install tests
	@echo "running make build"
	node make build

dev: install
	node make dev

live: install
	node make live

master.increaseVersion:
	git checkout master
	@git pull origin master
	@node make pkg:increaseVersion

npm.version:
	git pull --tags
	npm version patch
	git push origin $(git_branch)
	git push --tags

git.updateRelease:
	git checkout release
	@git pull origin release
	@git merge --no-edit master

dist-folder:
	@git add aplazame.js -f
	@git add aplazame.min.js -f
	@git add dist -f --all
	@git add public -f --all
	# following line starts by '-' to avoid errors on commits with no changes
	-git commit -n -m "updating built versions"
	@git push origin release

github.release: export PKG_VERSION=$(shell node -e "console.log('v'+require('./package.json').version);")
github.release: export RELEASE_URL=$(shell curl -s -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${GITHUB_TOKEN}" \
	-d '{"tag_name": "${PKG_VERSION}", "target_commitish": "$(git_branch)", "name": "${PKG_VERSION}", "body": "", "draft": false, "prerelease": false}' \
	-w '%{url_effective}' "https://api.github.com/repos/aplazame/aplazame-js/releases" )
github.release:
	@echo ${RELEASE_URL}
	@true

release: install tests npm.version git.updateRelease build dist-folder github.release
	@git checkout $(git_branch)

echo:
	@echo "make options: test build dev live"

# DEFAULT TASKS

.DEFAULT_GOAL := build
