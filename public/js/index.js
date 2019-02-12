"use strict";

var math = _interopRequireWildcard(require("./math.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

console.log(math.sumAll(50, 10));
console.log(math.subtractAll(50, 10));
console.log(math.multiplyAll(50, 10));
console.log(math.divideAll(50, 10));
console.log(math.findModulus(50, 15));