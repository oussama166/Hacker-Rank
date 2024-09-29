import { getTotalX } from "./Between_Two_Sets";

describe("This test case for between two sets", () => {
  test("should return 2", () => {
    expect(getTotalX([2, 6], [24, 36])).toEqual(2);
  });
  test("Should return 3", () => {
    expect(getTotalX([2, 4], [16, 32, 96])).toEqual(3);
  });
  test("Should return 2", () => {
    expect(getTotalX([3, 4], [24, 48])).toEqual(2);
  });
});
