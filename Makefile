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

git.increaseVersion:
	@git checkout master
	@git pull origin master
	@node run increaseVersion
	@git commit -a -m "increased version"
	@git push origin master

git.updateRelease:
	@git checkout release
	@git pull origin release
	@git merge master

publish: git.increaseVersion git.updateRelease build
	@git add aplazame.js -f
	@git add aplazame.min.js -f
	@git commit -m "updating built versions"
	@git push origin release

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
