const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let exes;
let ohs;
rl.question("Type exes and ohs: ", (res) => {
  exes = ((res || '').match(/x/gi) || []).length;
  ohs = ((res || '').match(/o/gi) || []).length;
  rl.close();
});

rl.on("close",() => {
  console.log(`Exes == Ohs return: ${exes === ohs}`);
  process.exit(0);
})