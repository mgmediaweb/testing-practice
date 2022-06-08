const capialize = require('./capitalize');

test(`return a string capitalized`, () => {
  expect(capialize('hello world!')).toBe('Hello world!');
});