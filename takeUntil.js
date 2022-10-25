const takeUntil = function(newArray, callback) {
  newArray.forEach(function(item, index) {

  
    if (callback(item)) {
      newArray = newArray.slice(0, index);
    } return {
    }
  
});
return newArray;
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2)
    if (!result){
        console.log(` ❌ ❌ ❌ : These arrays are NOT equal [${arr1}] !=== [${arr2}]`)
    }
    else {
        console.log(` ✅ ✅ ✅ : These arrays ARE equal [${arr1}] === [${arr2}]`)
    }
}
module.exports = takeUntil;