// modules protected thrir variables and functions from leaking, you can not access outside of other modules

// common js
// const sumFun = 30;
// function calculate(a, b) {
//   const sum = a + b;
//   return sum;
// }
// // here we exports
// module.exports = { calculate, sumFun };

export const sumFun = 30;
export function calculate(a, b) {
  const sum = a + b;
  return sum;
}
// here we exports
