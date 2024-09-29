/**
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 * @param int[]
 * @returns int[]
 */

function cutTheSticks(arr) {
  let arrSorted = arr.sort((a, b) => a - b).flat();
  let counter = 0;
  let substruct = {};
  const lon = arrSorted.length;
  let returnResult = [];

  while (counter <= lon && arrSorted.length > 0) {
    let iteration = {
      lengthCut: Math.min(...arrSorted),
      sticksCut: arrSorted.length,
      result: [],
    };
    returnResult.push(iteration.sticksCut);
    iteration.result = arrSorted
      .map((el) => {
        el = Math.abs(iteration.lengthCut - el);
        return el;
      })
      .filter((els) => {
        if (els == 0) {
          return 0;
        } else {
          return 1;
        }
      });
    arrSorted = iteration.result;

    counter++;
    substruct[`${counter}`] = iteration;
  }

  return returnResult;
}

module.exports = cutTheSticks;
