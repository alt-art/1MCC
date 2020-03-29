function like() {
  let input = ['Hello','World','REala'];
  switch (input.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${input} like this`;
    case 2:
      return `${input.join(" and ")} like this`;
    case 3:
      let conserve = input[input.length -1];
      input.length = 2;
      return `${input.join(", ")} and ${conserve} like this`;
    default:
      let moreLike = ` and ${input.length - 2} others like this`;
      input.length = 2;
      return input.join(", ") + moreLike;
  }
}

console.log(like())