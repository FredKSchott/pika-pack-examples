# @pika/fetch

An isomorphic, cross-environment Fetch API ponyfill.

```
git clone && cd
pika install
pika build
pika validate
```

# Published Package Manifest

This is the automatically generated `package.json` manifest, created from running either `pika pack` or `pika publish`:

```json
{
  "name": "@pika/fetch",
  "version": "0.1.0",
  "description": "An isomorphic, cross-environment Fetch API ponyfill.",
  "keywords": ["pika-pkg"],
  "main": "dist-node/index.js",
  "module": "dist-web/index.js",
  "types": "dist-typings/index.d.ts",
  "preferGlobal": false,
  "sideEffects": false,
  "pika": true,
  "files": [
    "dist-src/",
    "dist-web/",
    "dist-node/",
    "dist-typings/",
    "assets/"
  ],
  "dependencies": {
    "node-fetch": "^2.3.0"
  }
}

```