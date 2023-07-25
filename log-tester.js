// capture with
// node log-tester.js 2>&1 |tee -a /tmp/dashcam/tee.log

const fs = require("fs");

setInterval(() => {
  let time = new Date();
  console.log(time);
}, 1000);

// setTimeout(() => {
//   throw new Error("It happened");
// }, 5000);
