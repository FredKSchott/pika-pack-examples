#!/usr/bin/env node
'use strict';





let cli;
try {
  cli = require('./index.bundled.js');
} catch (err) {
  // We don't have/need this on legacy builds and dev builds
  // If an error happens here, throw it, that means no code exists at all.
  cli = require('./index.js');
}

if (!cli.autoRun) {
  cli.default().catch(function (error) {
    console.error(error.stack || error.message || error);
    process.exitCode = 1;
  });
}
