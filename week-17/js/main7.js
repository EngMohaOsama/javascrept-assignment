let numOne = [1, 2, 3];
let numTwo = [4, 5, 6];

let numArray = numOne.concat(numTwo);
console.log(numArray);

let numArray2 = [...numOne, ...numTwo];
console.log(numArray2);

let numArray3 = [...numOne]
// for (i = 0; i < numTwo.length; i++) {
//     numArray3.push(numTwo[i]);
// }
numTwo.forEach(num => {
    numArray3.push(num)
});
console.log(numArray3);
// Needed Output
// [1, 2, 3, 4, 5, 6]