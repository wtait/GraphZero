'use strict';

const connectors = require('..');
const assert = require('assert').strict;

assert.strictEqual(connectors(), 'Hello from connectors');
console.info('connectors tests passed');
