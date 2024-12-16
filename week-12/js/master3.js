let convetRat = 15.6;
let dollarInput = document.querySelector("[name='dollar']");
let resultDiv = document.querySelector(".result");

function updateConversion() {
    let dollarValue = parseFloat(dollarInput.value);

    if (!isNaN(dollarValue)) {
        let poundValue = (dollarValue * convetRat).toFixed(2);
        resultDiv.innerHTML = `${dollarValue.toFixed(2)} USD Dollar = ${poundValue} Egyptian Pound`;
    } else {
        resultDiv.innerHTML = "0 USD Dollar = 0 Egyptian Pound";
    }
}
dollarInput.addEventListener('input', updateConversion);

updateConversion();