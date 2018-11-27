export function createWASM(deps = {}) {
  const url = new URL("../assets/index.wasm", import.meta.url);
  const input = window.fetch(url);
  return WebAssembly.instantiateStreaming(input, deps);
}
export default createWASM;
