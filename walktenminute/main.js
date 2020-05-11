let input = ['n','w','s','e','n','w','s','e','n','s'];

let y = 0, x = 0;

input.forEach(point=>{
  switch (point) {
    case 'n':
      y++;
      break;
    case 's':
      y--;
      break;
    case 'w':
      x++;
      break;
    case 'e':
      x--;
      break;
  }
})
console.log(y === 0 && x === 0 && input.length === 10);

