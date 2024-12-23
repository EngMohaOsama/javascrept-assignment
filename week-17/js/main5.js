let theName = "Elzero";

let newArray = theName.split("");
console.log(newArray);

let newArray2 = [...theName];
console.log(newArray2);

let newArray3 = Array.from(theName);
console.log(newArray3);

let newArray4 = [...new Set(theName)];
console.log(newArray4);

let newArray5 = Object.assign([], theName);
console.log(newArray5);
// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']