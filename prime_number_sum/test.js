import sumOfAllPrimes from "./";

test("sumOfAllPrimes function exists", () => {
  expect(typeof sumOfAllPrimes).toEqual("function");
});

test("sumOfAllPrimes(15)", () => {
  expect(sumOfAllPrimes(15)).toEqual(41);
});
