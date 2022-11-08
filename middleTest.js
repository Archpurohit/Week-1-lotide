const assertEqual = require('./assertEqual');
const assert = require('chai').assert;
const head   = require('../head');

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1)
  } else {
     let newArray = [];
     let middleNum = Math.round(array.length /2)
     newArray.push(array[middleNum -1]);
     return newArray;
  }
};

module.exports = middle;

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});
