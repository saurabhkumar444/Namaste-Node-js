const crypto = require("crypto");

function runTask(taskNumber) {
  console.log(`Task ${taskNumber} started`);
  crypto.pbkdf2("password", "salt", 100, 512, "sha512", () => {
    console.log(`Task ${taskNumber} completed`);
  });
}

for (let i = 1; i <= 6; i++) {
  runTask(i);
}
