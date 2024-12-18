let prompMsg = prompt("Print Number From – To", "Example: 5-20");
//promopNum us array that is contain a number is string form . 
let prompNum = prompMsg.split("-").sort((a, b) => a - b);

for (let i = +prompNum[0]; i <= prompNum[1]; i++) {
    let num = document.createElement("p");
    num.textContent = i;
    document.body.append(num);
}