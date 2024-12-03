let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2);
allArrs = allArrs[5].concat(allArrs[2], allArrs[6]).toLowerCase();

console.log(allArrs); // fxy
