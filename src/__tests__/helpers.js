/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const helpers = require("../helpers");

test("increment of 1 is 2", () => {
  expect(helpers.incrementQty(1)).toBe(2);
});

test("decrement of 2 is 1", () => {
  expect(helpers.decrementQty(2)).toBe(1);
});

test("multiplication of 50000(price) * 2(qty) to equal 100000", () => {
  expect(helpers.getSubTotal(50000, 2)).toBe(100000);
});

test("checking wheter input 'w' is a number?", () => {
  expect(helpers.isNumber("otherID", "w")).toBe("0");
});

test("checking wheter input 'a' is a number?", () => {
  expect(helpers.isNumber("otherID", "a")).toBe("0");
});

test("multiplication of 5(price) * 2(qty) to equal 10", () => {
  expect(helpers.getSubTotal(5, 2)).toBe(10);
});