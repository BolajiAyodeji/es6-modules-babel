"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findModulus = exports.multiplyAll = exports.divideAll = exports.subtractAll = exports.sumAll = void 0;

var sumAll = function sumAll(a, b) {
  return a + b;
};

exports.sumAll = sumAll;

var subtractAll = function subtractAll(a, b) {
  return a - b;
};

exports.subtractAll = subtractAll;

var divideAll = function divideAll(a, b) {
  return a / b;
};

exports.divideAll = divideAll;

var multiplyAll = function multiplyAll(a, b) {
  return a * b;
};

exports.multiplyAll = multiplyAll;

var findModulus = function findModulus(a, b) {
  return a % b;
};

exports.findModulus = findModulus;