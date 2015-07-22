# --- aplazame-js

dev: test
	@npm start

test: install.npm
	@npm test

install.npm:
	@npm install

echo:
	@echo "make options: dev test"

.DEFAULT_GOAL := echo
