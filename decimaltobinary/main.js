let input = 321;
result = '';
while (0 < input) {
  result = input % 2 + result;
  input = Math.trunc(input / 2);
}

console.log(result);
