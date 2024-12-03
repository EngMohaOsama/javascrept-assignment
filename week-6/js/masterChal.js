/*
  Array Challenge
  all you need to to is get the output comment without useing any number you allwed only to use 
  variablos without changing it
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, counter + true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(zero + true, counter).reverse()); // ["Elham", "Mazero"]

console.log(`"${my[2].slice(0, 2) + my[1].slice(2)}"`); // "Elzero"

console.log(`"${my[1].slice(4, 5) + my[1].slice(5).toUpperCase()}"`); // "rO"
