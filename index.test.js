const { expect } = require("@jest/globals");
const {
  reverseString,
  stringLength,
  Calculator,
  capitalize,
} = require("./index");

// MULTIPLE CONDITIONS TESTS
test("char length", () => {
  //   expect(stringLength("James")).toBe(5);
  expect(stringLength("Serengia")).toBeGreaterThan(0);
  expect(stringLength("James")).toBeLessThanOrEqual(10);
});

test("reverse string checker", () => {
  expect(reverseString("james t")).toBe("t semaj");
});

// CLASS METHODS TESTS => BUNDLED TOGETHER
describe("calculator checker", () => {
  const calculator = new Calculator(4, 2);
  test("add test", () => {
    expect(calculator.add()).toBe(6);
  });
  test("sub test", () => {
    expect(calculator.subtract()).toBe(2);
  });
  test("divide test", () => {
    expect(calculator.divide()).toBe(2);
  });
  test("multiply test", () => {
    expect(calculator.multiply()).toBe(8);
  });
});

// CAPITALIZE FIRST LATTER TEST
test("capitalize first letter of a string", () => {
  expect(capitalize("james")).toBe("James");
});
