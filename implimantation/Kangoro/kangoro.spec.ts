import { kangaroo } from "./Kangoro";

describe("This test case of Kangoro Hacker rank problem", () => {
  test("The first test : ", () => {
    expect(kangaroo(0, 3, 4, 2)).toEqual("Yes");
  });
  test("The second test : ", () => {
    expect(kangaroo(0, 2, 5, 3)).toEqual("No");
  });
});
