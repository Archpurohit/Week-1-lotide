const assertEqual = require('./assertEqual');

const middle = function(array) {
  let array_result = []; //Initialize it to empty array
  if (array.length <= 2 && array.length > 0) {
    return array_result;
  } else if (array.length % 2 === 0) {
    return array_result = [array[(array.length / 2) - 1], array[array.length / 2]];
  } else {
    return array_result = array[(array.length - 1) / 2];
  }
};

console.log(middle)

module.exports = assertEqual;
