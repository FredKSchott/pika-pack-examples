const fs = require('fs');
const path = require('path');
exports.default = exports.createWASM = function createWASM(deps = {}) {
  const buf = fs.readFileSync(path.join(__dirname, '../assets/index.wasm'));
  return WebAssembly.instantiate(buf, deps);
}
