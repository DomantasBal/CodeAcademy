function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    if (b === 0) {
      return NaN;
    }
    return a / b;
  } else {
    return NaN;
  }
}

module.exports = calculate;
