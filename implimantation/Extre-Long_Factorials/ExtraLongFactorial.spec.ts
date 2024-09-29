import { ExtraLongFactorial } from "./ExtraLongFactorials";

describe("Extra long Factorial function test", () => {
  test("This is test for Extra long factorial => ", () => {
    expect(ExtraLongFactorial(25)).toBe("15511210043330985984000000");
    expect(ExtraLongFactorial(45)).toBe(
      "119622220865480194561963161495657715064383733760000000000"
    );
  });
});
