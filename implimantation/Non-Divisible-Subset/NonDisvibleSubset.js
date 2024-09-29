/**
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
  // Initializing the count var with 0
  let count = new Array(k).fill(0);

  // Count the frequency of remainders
  for (let i = 0; i < s.length; i++) {
    let num = parseInt(s[i]);
    let remainders = num % k;
    count[remainders]++;
  }

  // Determine the size of the largest subset
  let result = Math.min(count[0], 1);
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i !== k - i) {
      result += Math.max(count[i], count[k - i]);
    } else {
      result++;
    }
  }
  return result;
}

module.exports = nonDivisibleSubset;
