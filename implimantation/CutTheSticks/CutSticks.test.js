const cutTheSticks = require("./CutSticks");

test("Test -> 1", () => {
  expect(cutTheSticks([5, 4, 4, 2, 2, 8])).toStrictEqual([6, 4, 2, 1]);
});
test("Test -> 1", () => {
  expect(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])).toStrictEqual([8, 6, 4, 1]);
});
