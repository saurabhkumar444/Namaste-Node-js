process.env.UV_THREADPOOL_SIZE = 5;
const crypto = require("crypto");

// depands on thread and availability

// function runTask(taskNumber) {
//   console.log(`Task ${taskNumber} started`);
//   crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
//     console.log(`Task ${taskNumber} completed`);
//   });
// }

// sync operation
// function runTask(taskNumber) {
//   console.log(`Task ${taskNumber} started`);
//   const data = crypto.pbkdf2Sync("password", "salt", 100, 50, "sha512");
//   console.log(`Task ${taskNumber} completed`);
// }

// for (let i = 1; i <= 10; i++) {
//   runTask(i);
// }

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 1 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 2 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 3 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 4 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 5 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 6 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 7 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 8 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 9 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 10 completed`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log(`Task 11 completed`);
});
