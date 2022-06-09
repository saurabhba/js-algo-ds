import sumDigits from ".";

test("sumDigits function exists", () => {
  expect(typeof sumDigits).toEqual("function");
});

test("sumDigits(1) should return 1", () => {
  expect(sumDigits(1)).toEqual(1);
});

test("sumDigits(49) should return 4", () => {
  expect(sumDigits(49)).toEqual(4);
});

test("sumDigits(439230) should return 3", () => {
  expect(sumDigits(439230)).toEqual(3);
});
