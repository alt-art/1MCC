const font = require('./Calvin.json');
const string = "Calango".toLowerCase();
let lineOne = "";
let lineTwo = "";
let lineTree = "";
console.log("");
for (let letter of string.split("")) {
    font.map(a => {
        if (a.def == letter) {
            lineOne += a.small[0];
            lineTwo += a.small[1];
            lineTree += a.small[2];
        }
    });
}
console.log(lineOne);
console.log(lineTwo);
console.log(lineTree);