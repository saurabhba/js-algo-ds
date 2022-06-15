import missingNumbers from "./";

test("missingNumbers function exists", () => {
  expect(typeof missingNumbers).toEqual("function");
});

test("missingNumbers([0, 1, 3])", () => {
  expect(missingNumbers([0, 1, 3])).toEqual([2]);
});

test("missingNumbers([10, 11, 14, 17])", () => {
  expect(missingNumbers([10, 11, 14, 17])).toEqual([12, 13, 15, 16]);
});
