// require("./secondCode");

// commonjs version
// const { calculate, sumFun } = require("./sum");

// module version
import { calculate, sumFun } from "./sum.js";

// const calculate = require("./sum");
const firstName = "saurabh maurya";
console.log("first name: " + firstName);

// console.log(global);
// console.log(this);
// console.log(globalThis);
const sumData = calculate(10, 30);
const sumFunData = sumFun;
console.log(sumData, sumFunData);
// console.log(globalThis === this);
// console.log(globalThis === global);
