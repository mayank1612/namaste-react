const sum = (a, b) => a + b;

test('check sum of 2 positive number', () => {
  expect(sum(2, 3)).toBe(5);
});
