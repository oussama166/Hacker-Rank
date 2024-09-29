import { breakingRecords } from "./Breaking_the_Records";

describe("This test for Breaking the records hacker rank", () => {
  test("Test case 1", () => {
    expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
  });
  test("Test case 2", () => {
    expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([
      4, 0,
    ]);
  });
  test("Test case 3", () => {
    expect(
      breakingRecords([
        17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81,
        32, 50,
      ])
    ).toEqual([5, 1]);
  });
});
