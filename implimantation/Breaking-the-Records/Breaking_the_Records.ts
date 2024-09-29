/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

export function breakingRecords(scores: number[]): number[] {
  let counterTab: number[] = [0, 0];
  let scoresTabL: number[] = [scores[0], scores[0]];

  // Loop trought
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < scoresTabL[0]) {
      scoresTabL[0] = scores[i];
      counterTab[1]++;
    } else {
      if (scores[i] > scoresTabL[1]) {
        scoresTabL[1] = scores[i];
        counterTab[0]++;
      }
    }
  }

  return counterTab;
}
