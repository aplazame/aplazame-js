# --- aplazame-js

npmdir = $(shell npm bin)
whoami = $(shell whoami)

# TASKS

run.demo:
	@node run demo

install.npm:
	npm install

demo.less:
	@$(npmdir)/lessc demo/demo.less demo/demo.css

dev: test
	@npm start

build: install.npm
	@node run build

git.updateMaster:
	@git checkout master
	@git pull origin master

build.create: git.updateMaster build
	@node run increaseVersion
	@git commit -a -m "increased version and updated aplazame.min.js"

git.updateRelease:
	@git checkout release
	@git pull origin release

git.mergeMaster:
	@git merge master

publish: git.updateMaster pkg.increaseVersion git.updateRelease git.mergeMaster
	@echo "\n\trelease version $(shell node run pkgVersion)\n"

test: install.npm
	@node run jshint
	@$(npmdir)/karma start karma/src.conf.js
	@$(npmdir)/karma start karma/min.conf.js

echo:
	@echo "make options: dev build test"

# DEFAULT TASKS

.DEFAULT_GOAL := echo
