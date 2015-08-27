# --- aplazame-js

npmdir = $(shell npm bin)
whoami = $(shell whoami)

# TASKS

run.demo:
	@node run demo

jshint:
	@node run jshint

install.npm:
	npm install

demo.less:
	@$(npmdir)/lessc demo/demo.less demo/demo.css

dev: test
	@npm start

browserify:
	@$(npmdir)/browserify src/main.js -o aplazame.js

build: install.npm jshint browserify
	@node run build

git.updateMaster:
	@git checkout master
	@git pull origin master

build.create: git.updateMaster build
	@node run increaseVersion
	@git commit -a -m "increased version and updated aplazame.min.js"
	@git push origin master

git.updateRelease:
	@git checkout release
	@git pull origin release

git.mergeMaster:
	@git merge master
	@git push origin release

publish: git.updateMaster build.create git.updateRelease git.mergeMaster
	@echo "\n\trelease version $(shell node run pkgVersion)\n"

test: build
	@$(npmdir)/karma start karma/src.conf.js
	@$(npmdir)/karma start karma/min.conf.js

echo:
	@echo "make options: dev build test"

# DEFAULT TASKS

.DEFAULT_GOAL := echo
