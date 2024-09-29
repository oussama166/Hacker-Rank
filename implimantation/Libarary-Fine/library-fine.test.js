const libraryFine = require("./library-fine");

test("first test : 9/06/2015 -> 6/06/2015", () => {
  expect(libraryFine(9, 6, 2015, 6, 6, 2015)).toBe(45);
});
test("second test : 6/06/2015 -> 9/06/2016", () => {
  expect(libraryFine(6, 6, 2015, 9, 6, 2016)).toBe(0);
});
test("thirth test : 2/07/1014 -> 1/01/1014", () => {
  expect(libraryFine(2, 7, 1014, 1, 1, 1014)).toBe(3000);
});
test("fourth test : 2/07/1014 -> 1/01/1015", () => {
  expect(libraryFine(2, 7, 1014, 1, 1, 1015)).toBe(0);
});
test("last test :2/07/2015 -> 1/02/2014", () => {
  expect(libraryFine(2, 7, 2015, 1, 2, 2014)).toBe(10000);
});

test("last test :2/07/2015 -> 1/02/2014", () => {
  expect(libraryFine(2, 7, 2015, 1, 2, 2014)).toBe(10000);
});

test("2/05/2015 -> 30/05/2015", () => {
  expect(libraryFine(2, 5, 2015, 30, 5, 2015)).toBe(0);
});
test("31/05/2014 -> 1/05/2014", () => {
  expect(libraryFine(31, 5, 2014, 1, 5, 2014)).toBe(450);
});
