const incrementQty = (qty) => +qty + 1;
const decrementQty = (qty) => +qty - 1;

function getSubTotal(qty, price) {
  return qty * price;
}

function isNumber(vId, vValue) {
  if (isNaN(vValue) || vValue < 0) {
    if (vId === "price") {
      return "50000";
    } else if (vId === "qty") {
      return "1";
    } else {
      return "0";
    }
  }
  return vValue;
}

module.exports = {
  incrementQty,
  decrementQty,
  getSubTotal,
  isNumber,
};
