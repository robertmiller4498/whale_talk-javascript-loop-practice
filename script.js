//Not the most neat code, but a working loop. Created a repository to look back on and reference.
let input = "Loops are extremely difficult, tougher than understanding a whale.";


let vowels = ["a", "e", "i", "o", "u"];


let resultArray = [];


for (i = 0; i < input.length; i++) {
for (j = 0; j < vowels.length; j++) {

  if (input[i] === vowels[j]) {
    if(input[i] === 'e') {
      resultArray.push('ee');
    }else if(input[i] === 'u') {
      resultArray.push('uu');
     } else {
      resultArray.push(input[i]);
    }
  }
}
}

console.log(resultArray.join('').toUpperCase());