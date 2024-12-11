let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce((acc, current) => {
    return acc.concat(Array.isArray(current) ? current : [current]);
}, []);

let finalResult = result.join("");

console.log(finalResult); // Elzero
