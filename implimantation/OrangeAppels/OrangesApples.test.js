const countApplesAndOranges = require();

test("Should Get 1 apple and 2 oranges", () => {
  expect(countApplesAndOranges(7, 11, 3, 2, [-2, 2, 1], [5, -6])).toStrictEqual(
    [1, 1]
  );
});
