input = 'Hello, i am programer and like banana. I go to my pc and make some chalenges.\nI am not a good writer.';

let phrase = input.split(/\. |\.\n/g);
let words = input.split(/ |, |\. |\n/g);
let paragraphs = input.split(/\n/g);

console.log(input);

console.log('Characters: ', input.length);
console.log(input.split(''));

console.log('Words: ', words.length);
console.log(words);

console.log('Phrase: ', phrase.length);
console.log(phrase);

console.log('Paragraphs: ', paragraphs.length);
console.log(paragraphs);
