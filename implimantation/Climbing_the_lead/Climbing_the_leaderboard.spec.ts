import { climbingTheLeaderBoard } from "./Climbing_the_leaderboard";

describe("This unit test for the function Climbing the leaderboard", () => {
  test("on this test Alice must be in the 1st palce", () => {
    expect(
      climbingTheLeaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
    ).toEqual([6, 4, 2, 1]);
  });
  test("on this test Alice also is on the 1st place", () => {
    expect(
      climbingTheLeaderBoard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
    ).toEqual([6, 5, 4, 2, 1]);
  });
});
