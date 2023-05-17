const addFive = require("./addFive");

test("returns the plus 5", () => {
  expect(addFive(1)).toBe(6);
});
