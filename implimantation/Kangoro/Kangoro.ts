/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 *  TODO : We need to see the start postion if the is same of one is grate than other
 */

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  let result: string[] = ["Yes", "No"];
  let height = x2 - x1;
  let speed = v1 - v2;
  if (speed <= 0) return result[1];
  if (height % speed === 0) return result[0];
  return result[1];
}

export { kangaroo };
