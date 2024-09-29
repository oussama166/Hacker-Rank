/**
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

export const climbingTheLeaderBoard = (ranked: number[], player: number[]) => {
  let result = []; // Array
  let uniqueScores: number[] = [...new Set(ranked)]; // Set
  uniqueScores.sort((a: number, b: number) => b - a); // Sort
  // iteration for to add new scoore of alice
  for (const score of player) {
    let uniqueScoresTemp: number[] = new Array(...uniqueScores);
    if (uniqueScoresTemp.includes(score)) {
      result.push(uniqueScoresTemp.indexOf(score) + 1);
    } else {
      uniqueScoresTemp.push(score);
      uniqueScoresTemp.sort((a: number, b: number) => b - a);
      result.push(
        uniqueScoresTemp.findIndex((val: number) => val === score) + 1
      );
    }
  }
  return result;
};
