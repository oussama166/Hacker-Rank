/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s FOR START SURFACE HOUSE
 *  2. INTEGER t FOR END SURFACE HOUSE
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */
export default function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  apples.forEach((apple) => {
    if (a + apple >= s && a + apple <= t) {
      appleCount++;
    }
  });

  oranges.forEach((orange) => {
    if (b + orange >= s && b + orange <= t) {
      orangeCount++;
    }
  });
  return [appleCount, orangeCount];
}
