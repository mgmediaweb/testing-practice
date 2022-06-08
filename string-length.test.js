const strlenght = require('./string-length');

test(`return a lenght when the between into 1 and 10`, () => {
  const str = 'Hello World!';
  expect(strlenght(str)).toBe(-1);
});