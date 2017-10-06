function add(a, b) {
  return a + b;
};
function subtract(a, b) {
  return a - b;
};
function multiply(a, b) {
  return a * b;
};
function divide(a, b) {
  return a / b;
};
var n = 345;
function inc(n) {
  return n+= 1;
};
function dec(n) {
  return n-= 1;
};
function makeInt(n) {
  return parseInt(n, 10);
};
function preserveDecimal(n) {
  parseInt(n, 10);
  var n = 2.222;
  return parseFloat(n);
};
