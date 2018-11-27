import { Greeter } from "../index.js";
test('My Greeter', () => {
  expect(Greeter('Carl').startsWith('Hello Carl')).toBeTrue();
});