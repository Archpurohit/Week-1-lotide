const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for(const item of allItems){
     
    console.log(item);
   
    if (itemsToCount[item]){
      if (results[item]) {
      results[item] += 1;        
  } else {
      results[item] = 1;
  }
  
  
}
}
return results;
}  


const firstNames = [
  "Archit",
  "Purohit",
  "Santi",
];

const result1 = countOnly(firstNames, { "Archit": true, "Purohit": true, "Santi": true,});

assertEqual(result1["Archit"], 1);
assertEqual(result1["Purohit"], undefined);
assertEqual(result1["Santi"], 2);

module.exports = countOnly;
