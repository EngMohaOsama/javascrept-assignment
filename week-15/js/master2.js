// verifying and selecting value from html by id
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let select = document.querySelector("#select");

//for upload the input data from input fled to session storage.
one.oninput = function () {
    window.sessionStorage.setItem("one-text", this.value);
}
two.oninput = function () {
    window.sessionStorage.setItem("two-text", this.value);
}
three.oninput = function () {
    window.sessionStorage.setItem("three-text", this.value);
}
one.onchange = function () {
    window.sessionStorage.setItem("select-1", this.value);
}

// for saving change of (input fled) in case the web get reload By getting value form session storage. 
one.value = window.sessionStorage.getItem("one-text");
two.value = window.sessionStorage.getItem("two-text");
three.value = window.sessionStorage.getItem("three-text");
select.value = window.sessionStorage.getItem("select-1");