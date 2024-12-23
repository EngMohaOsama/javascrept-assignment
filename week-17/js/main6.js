function newArray(arr) {
    let numbers = arr.filter(item => typeof item === 'number');
    let letters = arr.filter(item => typeof item === 'string');
    let numCount = numbers.length;
    let theNewArray = [...numbers, ...letters];

    console.log(theNewArray.copyWithin(0, numCount, numCount + numCount));
}
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
newArray(chars)

