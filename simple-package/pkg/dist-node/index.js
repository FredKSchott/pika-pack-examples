'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Greet your friends!
 * @param {string} name
 */
const Greeter = name => `Hello ${name}, from ${new (typeof URL !== 'undefined' ? URL : require('ur'+'l').URL)((process.browser ? '' : 'file:') + __filename, process.browser && document.baseURI).href}`;

exports.Greeter = Greeter;
