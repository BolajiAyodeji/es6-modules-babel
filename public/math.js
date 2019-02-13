"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var sumAll = function sumAll(a, b) {
  return a + b;
};

var subtractAll = function subtractAll(a, b) {
  return a - b;
};

var divideAll = function divideAll(a, b) {
  return a / b;
};

var multiplyAll = function multiplyAll(a, b) {
  return a * b;
};

var findModulus = function findModulus(a, b) {
  return a % b;
};

var _default = {
  sumAll: sumAll,
  subtractAll: subtractAll,
  divideAll: divideAll,
  multiplyAll: multiplyAll,
  findModulus: findModulus
};
exports.default = _default;