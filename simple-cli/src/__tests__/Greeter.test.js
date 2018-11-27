import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl').startsWith('Hello Carl')).toBeTrue();
});
