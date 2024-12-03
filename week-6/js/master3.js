let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = [...arrTwo, ...arrOne].sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
