var s = "I am the best footballer in the world, Messi and Ronaldo can't compete with me";
var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
console.log(result);

