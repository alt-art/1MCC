const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let result = "none";
rl.question("Type a number: ", (res) => {
  result = res;
  while (result > 9) {
    let splitNumbers = String(result).split("");
    let value = 1;
    for (number of splitNumbers) {
      value = value * number;
    }
    result = value;
  }
  rl.close();
});

rl.on("close",() => {
  console.log("The result is: ", result);
  process.exit(0);
});