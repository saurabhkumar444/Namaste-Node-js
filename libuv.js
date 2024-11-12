const https = require("https");
const fs = require("fs");
console.log("LibUv");

var a = 1212121;
var b = 3232;

https.get("https://api.fbi.com", (res) => {
  console.log("resp", res);
});

setTimeout(() => {
  console.log("setTimeout");
}, 5000);

function multipleFn(a, b) {
  return a * b;
}

var c = multipleFn(a, b);

console.log("c", c);

console.log("file Path", __dirname);
