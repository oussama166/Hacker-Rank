const nonDivisibleSubset = require("./NonDisvibleSubset");

test("This test for non Divisible subset function", () => {
  expect(nonDivisibleSubset(3, [1, 7, 2, 4])).toBe(3);
});
test("This test for non Divisible subset function", () => {
  expect(nonDivisibleSubset(5, [2, 7, 12, 17, 22])).toBe(5);
});
test("This test for non Divisible subset function", () => {
  expect(
    nonDivisibleSubset(
      9,
      [422346306, 940894801, 696810740, 862741861, 85835055, 313720373]
    )
  ).toBe(5);
});
test("This test for non Divisible subset function", () => {
  expect(nonDivisibleSubset(3, [1, 7, 2, 4])).toBe(3);
});
