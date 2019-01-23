export function createWASM(deps = {}) {
  if (typeof __webpack_require__ !== "undefined") {
    return __webpack_require__("../assets/index.wasm");
  }
  const url = new URL("../assets/index.wasm", import.meta.url);
  const input = window.fetch(url);
  return WebAssembly.instantiateStreaming(input, deps);
}
export default createWASM;
