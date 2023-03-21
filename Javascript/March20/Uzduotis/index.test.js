const calculate = require("./index");

describe("Calculate", () => {
  // The function correctly adds two positive numbers (done)
  test("The function correctly adds two positive numbers", () => {
    const result = calculate(2, 2, "+");
    expect(result).toBe(4);
  });

  // The function correctly adds a positive number and a negative number
  test("The function correctly adds a positive number and a negative number", () => {
    const result = calculate(2, -3, "+");
    expect(result).toBe(-1);
  });

  // The function correctly subtracts two positive numbers
  test("The function correctly subtracts two positive numbers", () => {
    const result = calculate(5, 3, "-");
    expect(result).toBe(2);
  });

  // The function correctly subtracts two negative numbers
  test("The function correctly subtracts two negative numbers", () => {});

  // The function correctly subtracts a positive number and a negative number
  test("The function correctly subtracts a positive number and a negative number", () => {});

  // The function correctly multiplies two positive numbers
  test("The function correctly multiplies two positive numbers", () => {});

  // The function correctly multiplies two negative numbers
  test("The function correctly multiplies two negative numbers", () => {});

  // The function correctly multiplies a positive number and a negative number
  test("The function correctly multiplies a positive number and a negative number", () => {});

  // The function correctly divides two positive numbers
  test("The function correctly divides two positive numbers", () => {});

  // The function correctly divides two negative numbers
  test("The function correctly divides two negative numbers", () => {});

  // The function correctly divides a positive number and a negative number
  test("The function correctly divides a positive number and a negative number", () => {});

  // The function correctly handles division by zero and returns NaN
  test("The function correctly handles division by zero and returns NaN", () => {});
});

////////////////////////////////////
