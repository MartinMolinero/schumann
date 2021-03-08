const { mod12 } = require('./arithmetic');

test('mod 12 of 13 to eq 1', () => {
  expect(mod12(13)).toBe(1);
});