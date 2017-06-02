#!/usr/bin/env node

'use strict';

require('nitro').import('.make', ['*.js', '!.*']).run();
