import * as nodeFetch from 'node-fetch';
var realFetch = nodeFetch.default || nodeFetch;

export function fetch(url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ -> https://github.com/
  if (/^\/\//.test(url)) {
    url = 'https:' + url;
  }
  return realFetch.call(this, url, options);
};

export const Headers = nodeFetch.Headers;
export const Request = nodeFetch.Request;
export const Response = nodeFetch.Response;

