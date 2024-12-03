let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
// allArrs = allArrs[5].concat(allArrs[2], allArrs[6]).toLowerCase();
allArrs.push(arr2[2]);
allArrs.push(arr1[2]);
allArrs.push(arr2[3]);
allArrs = allArrs.join("").toLowerCase();
console.log(allArrs); // fxy
