# --- aplazame-js

npmdir = $(shell npm bin)
whoami = $(shell whoami)

# TASKS

git.hooks:
	@./bin/git-hooks

install.npm:
	npm install

auto.install: git.hooks
	@node auto-install

test:
	@node make test.jshint
	# @$(npmdir)/karma start karma/src.conf.js
	# @$(npmdir)/karma start karma/min.conf.js

build: auto.install
	bower install
	@node make build

dev: auto.install
	@node make dev

live: auto.install
	@node make live


git.increaseVersion:
	git checkout master
	@git pull origin master
	@node make pkg:increaseVersion
	git commit -a -n -m "increased version [$(shell node make pkg:version)]"
	@git push origin master

git.updateRelease:
	git checkout release
	@git pull origin release
	@git merge --no-edit master

release: auto.install test git.increaseVersion git.updateRelease build
	@git add aplazame.js -f
	@git add aplazame.min.js -f
	@git add dist -f --all
	@git add public -f --all
	git commit -n -m "updating built versions"
	@git push origin release
	@echo "\n\trelease version $(shell node make pkg:version)\n"

echo:
	@echo "make options: test build dev live"

# DEFAULT TASKS

.DEFAULT_GOAL := echo
