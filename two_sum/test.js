import twoSum from "./";

test("twoSum function exists", () => {
  expect(typeof twoSum).toEqual("function");
});

test("twoSum([1, 9, 13, 20, 47], 10)", () => {
  expect(twoSum([1, 9, 13, 20, 47], 10)).toEqual([0, 1]);
});

test("twoSum([3, 2, 4, 1, 9], 12)", () => {
  expect(twoSum([3, 2, 4, 1, 9], 12)).toEqual([0, 4]);
});

test("twoSum([], 10)", () => {
  expect(twoSum([], 10)).toEqual([]);
});

test("twoSum([2,3,1], 4)", () => {
  expect(twoSum([2, 3, 1], 4)).toEqual([1, 2]);
});
