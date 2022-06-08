const strReverse = require('./reverseString');

test(`return a string invert`, () => {
  expect(strReverse('Bicycle')).toBe('elcyciB');
});