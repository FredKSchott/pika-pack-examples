'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var nodeFetch = require('node-fetch');
var nodeFetch__default = _interopDefault(nodeFetch);

var realFetch = nodeFetch__default || nodeFetch;
function fetch(url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ -> https://github.com/
  if (/^\/\//.test(url)) {
    url = 'https:' + url;
  }

  return realFetch.call(this, url, options);
}
const Headers = nodeFetch.Headers;
const Request = nodeFetch.Request;
const Response = nodeFetch.Response;

exports.default = fetch;
exports.fetch = fetch;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
