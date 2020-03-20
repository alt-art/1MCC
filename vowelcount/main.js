const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let vowelsNumber;
rl.question("Type a word: ", (res) => {
  vowelsNumber = ((res || '').match(/a|e|i|o|u|A|E|I|O|U/g) || []).length;
  rl.close();
});

rl.on("close",() => {
  console.log(`Number of vowels is ${vowelsNumber}`);
  process.exit(0);
})