const fs = require("fs");

fs.readFile("text2.txt", "utf8", (err, data) => {
  console.log("file1 read");
});

fs.readFile("text2.txt", "utf8", (err, data) => {
  console.log("file2 read");
});

fs.readFile("text2.txt", "utf8", (err, data) => {
  console.log("file3 read");
});

fs.readFile("text2.txt", "utf8", (err, data) => {
  console.log("file4 read");
});

fs.readFile("text2.txt", "utf8", (err, data) => {
  console.log("file5 read");
});

console.log();
