// // index.js

// const head = require('./head')
const middle = require('./middle')
const tail = require('./tail')
const assertArraysEqual  = require('./assertArraysEqual');
const assertEqual        = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters       = require('./countLetters');
const countOnly          = require('./countOnly');
const eqArrays           = require('./eqArrays');
const eqObjects          = require('./eqObjects');
const findKey            = require('./findKey');
module.exports = {
  // head,
  tail,
  middle
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
};