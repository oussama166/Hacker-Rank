/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n - Square space
 *  2. INTEGER k - Number of obstacles
 *  3. INTEGER r_q - Row Queen
 *  4. INTEGER c_q - Column Queen
 *  5. 2D_INTEGER_ARRAY obstacles - Positon of each obstacles
 */

// NOTE : THE COMMENTS BELOW IS JUST EXPLINATION
/*
 * For the queen to attack, the queen must be able to move in a straight line
 * in any direction. The queen can move any number of squares in a straight line
 * in any direction. The queen cannot move through obstacles.
 *
 * The queen is located at (r_q, c_q) and the board is of size n x n.
 * The obstacles are located at the coordinates given in the obstacles array.
 *
 * The function should return the number of squares that the queen can attack.
 * EXEMPLE :
 * 4 ,0 ,4, 4
 *
 */

function queensAttack(
  n: number,
  k: number,
  r_q: number,
  c_q: number,
  obstacles?: number[][]
): number {
  // the path that queen take
  const board: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
    let solution_x =  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }

  return 0;
}

queensAttack(4, 0, 2, 2);
