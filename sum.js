// modules protected thrir variables and functions from leaking, you can not access outside of other modules

const sumFun = 30;
function calculate(a, b) {
  const sum = a + b;
  return sum;
}
// here we exports
module.exports = { calculate, sumFun   };
