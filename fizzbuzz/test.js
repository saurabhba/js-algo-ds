import fizzbuzz from ".";

test("fizzbuzz function exists", () => {
  expect(typeof fizzbuzz).toEqual("function");
});

test("fizzbuzz(0)", () => {
  expect(fizzbuzz(0)).toEqual("");
});

test("fizzbuzz(1)", () => {
  expect(fizzbuzz(1)).toEqual("1");
});

test("fizzbuzz(15)", () => {
  expect(fizzbuzz(15)).toEqual("12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz");
});
