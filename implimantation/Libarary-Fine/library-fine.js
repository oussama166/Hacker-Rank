/**
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */
function libraryFine(d1, m1, y1, d2, m2, y2) {
  // khasso irj3
  let expectDate = new Date(y2, m2 - 1, d2);
  // raj3o
  let dueDate = new Date(y1, m1 - 1, d1);

  if (expectDate.getFullYear() > dueDate.getFullYear()) {
    return 0;
  } else if (expectDate.getFullYear() == dueDate.getFullYear()) {
    if (expectDate.getMonth() < dueDate.getMonth()) {
      return Math.abs(dueDate.getMonth() - expectDate.getMonth()) * 500;
    } else if (expectDate.getMonth() == dueDate.getMonth()) {
      if (expectDate.getDate() <= dueDate.getDate()) {
        return Math.abs(dueDate.getDate() - expectDate.getDate()) * 15;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } else {
    return 10000;
  }
}

module.exports = libraryFine;
