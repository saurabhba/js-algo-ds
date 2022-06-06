import majorityElement from ".";

test("majorityElement function exists", () => {
  expect(typeof majorityElement).toEqual("function");
});

test("[1, 4, 2, 4, 4, 3, 4] has majority element 4", () => {
  expect(majorityElement([1, 4, 2, 4, 4, 3, 4])).toEqual(4);
});

test("[1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1] has majority element 1", () => {
  expect(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1])).toEqual(1);
});

test("[3, 3, 3, 2, 2] has majority element 1", () => {
  expect(majorityElement([3, 3, 3, 2, 2])).toEqual(3);
});

test("[3, 3, 2, 2] has majority element 1", () => {
  expect(majorityElement([3, 3, 2, 2])).toEqual(3);
});
