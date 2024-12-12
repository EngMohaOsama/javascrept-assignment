// Method One
// Create Your Object Here
let objMethodOne = {
    property: "Method One"
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = {}
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

function MethodThree() {
    this.property = "Method Three";
}

const objMethodThree = new MethodThree();

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let methodFour = {
    property: "Method Four"
}
objMethodFour = Object.assign({}, methodFour)
console.log(objMethodFour.property); // "Method Four"