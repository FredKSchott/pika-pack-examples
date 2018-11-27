const greetOutLoudAsync = async name => {
  console.log(`Hello, ${name} (async)`);
};

const greetOutLoud = name => {
  console.log(`Hello, ${name}`);
};

export { greetOutLoud, greetOutLoudAsync };
