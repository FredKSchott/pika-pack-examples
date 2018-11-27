function rgb2bgr(rgb) {
  return ((rgb >>> 16) & 0xff) | (rgb & 0xff00) | (rgb & 0xff) << 16;
}

function createImports() {
  return {
    env: {
        memory: new WebAssembly.Memory({initial: 10}),
    },
    config: {
        BGR_ALIVE : rgb2bgr(0xD392E6) | 1, // little endian, LSB must be set
        BGR_DEAD  : rgb2bgr(0xA61B85) & ~1, // little endian, LSB must not be set
        BIT_ROT   : 10
    },
    Math
  };
}