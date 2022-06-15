import missingInUnsorted from "./";

test("missingInUnsorted function exists", () => {
  expect(typeof missingInUnsorted).toEqual("function");
});

test("missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9)", () => {
  expect(missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9)).toEqual(8);
});
