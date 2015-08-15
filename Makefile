# --- aplazame-js

npmdir = $(shell npm bin)
whoami = $(shell whoami)

# TASKS

install.npm:
	@npm install

demo.less:
	@$(npmdir)/lessc demo/demo.less demo/demo.css

dev: test
	@npm start

build: install.npm
	@node run build

test: install.npm
	@node run jshint
	@$(npmdir)/karma start karma/src.conf.js
	@$(npmdir)/karma start karma/min.conf.js

echo:
	@echo "make options: dev build test"

# DEFAULT TASKS

.DEFAULT_GOAL := echo
