const assertEqual = require('./assertEqual'); 
const countLetters = function(sentence) {
let numberedLetters = [];
let string = sentence.split(" ").join("");

for (const characters of string) {
if (numberedLetters[characters]){
  numberedLetters[characters] += 1;
} else{
  numberedLetters = 1;
 }
}
  return numeredLetters;
};

module.exports = countLetters
