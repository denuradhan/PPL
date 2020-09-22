/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const helpers = require("../helpers");

test(" multiplication of 50000(price) * 2(qty) to equal 100000", () => {
  expect(helpers.getSubTotal(50000, 2)).toBe(100000);
});

test("checking wheter input 'w' is a number?", () => {
  expect(helpers.isNumber("otherID", "w")).toBe("0");
});
