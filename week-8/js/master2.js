function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === "add" || operation === undefined) {
    result = firstNum + secondNum;
    console.log(`${result}`);
  } else if (operation === "subtract") {
    result = firstNum - secondNum;
    console.log(`${result}`);
  } else if (operation === "multiply") {
    result = firstNum * secondNum;
    console.log(`${result}`);
    console.log;
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
