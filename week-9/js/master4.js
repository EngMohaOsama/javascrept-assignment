function specialMix(...data) {
  let sum = 0;

  for (let item of data) {
    let num = parseInt(item);
    if (!isNaN(num)) sum += num;
  }

  if (sum == 0) return "All Is Strings";

  return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings