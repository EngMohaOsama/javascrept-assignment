let myString = "EElllzzzzzzzeroo";

let result = myString.split('')
    .filter(function (element, index) {
        return myString.indexOf(element) === index
    })
    .join("");

console.log(result); // "Elzero"
