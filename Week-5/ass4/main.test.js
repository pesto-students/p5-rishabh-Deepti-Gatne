//importing calculator module
const calculator = require("./calculator.js");
//testing different test cases
test("1+5 should be 6", () => {
  expect(calculator.sum(1, 5)).toBe(6);
});

test("3-2 should be 1", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});
