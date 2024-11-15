const fs = require("fs");
const https = require("node:https");
const a = 10;
setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(() => {
  console.log("promise");
});

fs.readFile("text2.txt", "utf8", (err, data) => {
  console.log("file1 read", err, data);
});

fs.readFile("text.txt", "utf8", (err, data) => {
  Promise.resolve("Promise").then(() => {
    console.log("inside promise2");
  });

  setTimeout(() => {
    console.log("inside setTimeout");
  }, 9.0);

  setImmediate(() => console.log("inside setImmediate"));

  process.nextTick(() => {
    process.nextTick(() => {
      console.log("inside inside process");
    });
    console.log("inside process");
  });
});

setTimeout(() => {
  console.log("setTimeout");
}, 9);

function printA() {
  console.log("a->", a);
}

process.nextTick(() => {
  console.log("process");
});

printA();
console.log("last line of a file");
