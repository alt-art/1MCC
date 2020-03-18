let input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

function intersection() {
  let firstArray = input[0].split(', ');
  let secondArray = input[1].split(', ');
  let result = [];
  for (let fnum of firstArray) {
    secondArray.find(snum => {
      snum == fnum ? result.push(parseInt(fnum)): undefined
    });
  }
  return result;
}

console.log(intersection(input));