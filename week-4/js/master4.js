let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(typeof parseInt(myVar));
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57
console.log(typeof parseFloat(parseFloat(myVar).toFixed(2)));
