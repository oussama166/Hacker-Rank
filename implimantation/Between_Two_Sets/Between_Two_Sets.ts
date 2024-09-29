import { get } from "http";

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 *
 * The idea is to find values x for which the following conditions apply:
 * x needs to be divisable by each value in a;
 *  x % a[i] == 0
 *each value in b needs to be divisible by x;
 *  b[j] % x ==0
 *In the example, a=[2,6] and b=[24,36], either 6 or 12 satisfy both conditions. Note that x cannot be smaller than the max value in a, as the minimum divisor of a number is the number itself. Likewise, x cannot be larger than the min value in b.
 * */
export function getTotalX(a: number[], b: number[]): number {
  let counter: number = 0;
  let maxA: number = Math.max(...a);
  let minB: number = Math.min(...b);
  for (let i = maxA; i <= minB; i++) {
    if (a.every((val) => i % val == 0) && b.every((val) => val % i == 0)) {
      counter++;
    }
  }
  return counter;
}
