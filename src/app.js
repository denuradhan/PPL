//recreate new line
import * as lib from "./helpers.js";

const incrButton = document.querySelector("#incr");
const decrButton = document.querySelector("#decr");
const qtyInput = document.querySelector("#qty");
const priceInput = document.querySelector("#price");
const subTotal = document.querySelector("#subtotal");
const codeInput = document.querySelector("#code");
const codeButton = document.querySelector("#confirmButton");

incrButton.addEventListener("click", () => {
  qtyInput.value = lib.incrementQty(qtyInput.value);
  subTotal.textContent = lib.getSubTotal(priceInput.value, qtyInput.value);
});

decrButton.addEventListener("click", () => {
  if (qtyInput.value > 1) {
    qtyInput.value = lib.decrementQty(qtyInput.value);
    subTotal.textContent = lib.getSubTotal(priceInput.value, qtyInput.value);
  }
});

codeButton.addEventListener("click", () => {
  if (codeInput.value === "LAZADA") {
    subTotal.textContent = subTotal.textContent - subTotal.textContent * 0.25;
  } else {
    subTotal.textContent = lib.getSubTotal(priceInput.value, qtyInput.value);
  }
});

priceInput.addEventListener("focusout", () => {
  priceInput.value = lib.isNumber(priceInput.id, priceInput.value);
  subTotal.textContent = lib.getSubTotal(priceInput.value, qtyInput.value);
});

qtyInput.addEventListener("focusout", () => {
  qtyInput.value = lib.isNumber(qtyInput.id, qtyInput.value);
  subTotal.textContent = lib.getSubTotal(priceInput.value, qtyInput.value);
});
