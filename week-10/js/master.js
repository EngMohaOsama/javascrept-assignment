let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix.map(item => isNaN(item) ? item : '').join("");

console.log(result); // Elzero