const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(inputtedObject, expectedObject)) {
    console.log(`✅ Assertation Passed: ${inspect(inputtedObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🔴 Assertation Failed: ${inspect(inputtedObject)} !== ${inspect(expectedObject)}`);
  };

   module.exports = assertObjectsEqual;
