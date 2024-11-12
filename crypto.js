const crypto = require("crypto");
console.log("first");

const d = crypto.pbkdf2Sync("password", "salt", 2, 1, "sha512");
console.log("d", d);

setTimeout(() => {
  console.log("call me 5000");
}, 1);

crypto.pbkdf2("password", "salt", 1, 1, "sha512", (err, key) => {
  console.log("err, key->", err, key);
});
