function specialMix(...data) {
  let sum = 0;
  let allStrings = true;

  for (let item of data) {
    if (typeof item === "number") {
      sum += item;
      allStrings = false;
    } else if (typeof item === "string") {
      parseInt(item);
      sum += item;
      //   let numbersInString = item.match(/\d+/g);
      //   console.log(numbersInString);
      //   if (numbersInString) {
      //     sum += numbersInString.reduce((acc, num) => acc + parseInt(num, 10), 0);
      allStrings = false;
      //   }
    }
  }

  if (allStrings) {
    return "All Is Strings";
  }

  return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test20", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

console.log(parseInt("dsadas20"));
