# --- aplazame-js

npmdir = $(shell npm bin)
whoami = $(shell whoami)

# TASKS

install.npm:
	npm install

auto.install:
	@node auto-install

test:
	@node make test

build:
	@node run build

dev: auto.install
	@npm make dev

live: auto.install
	@node make live


git.increaseVersion:
	git checkout master
	@git pull origin master
	@node make pkg:increaseVersion
	git commit -a -m "increased version"
	@git push origin master

git.updateRelease:
	git checkout release
	@git pull origin release
	@git merge --no-edit master

release: install.npm jshint git.increaseVersion git.updateRelease build
	@git add aplazame.js -f
	@git add aplazame.min.js -f
	@git add dist -f --all
	git commit -m "updating built versions"
	@git push origin release
	@echo "\n\trelease version $(shell node make pkg:version)\n"

karma:
	@$(npmdir)/karma start karma/src.conf.js
	@$(npmdir)/karma start karma/min.conf.js

echo:
	@echo "make options: test build dev live"

# DEFAULT TASKS

.DEFAULT_GOAL := echo
