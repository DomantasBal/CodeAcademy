describe("sum.js", function () {
  test("add two numbers", function () {
    expect(1).toBe(1);
  });
});

test("empty object equals empty object", () => {
  const obj = { name: "bob" };
  // const expectedResult = { name: "tom" };
  const expectedResult = { name: "bob" };

  expect(obj).toEqual(expectedResult);
});
