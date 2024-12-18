// verifying and selecting value from html by id
let font = document.querySelector("#font");
let color = document.querySelector("#color");
let size = document.querySelector("#size");

// for saving change on (body) in case the web get reload or closed Buy getting value form local storage. 
document.body.style.fontFamily = window.localStorage.getItem("font");
document.body.style.color = window.localStorage.getItem("color");
document.body.style.fontSize = window.localStorage.getItem("size");

// for saving change of (input fled) in case the web get reload or closed Buy getting value form local storage. 
font.value = window.localStorage.getItem("font") || font.options[0].text;
color.value = window.localStorage.getItem("color") || color.options[0].text;
size.value = window.localStorage.getItem("size") || size.options[0].text;

font.onchange = function () {
    window.localStorage.setItem("font", this.value);
    document.body.style.fontFamily = this.value;
}
color.onchange = function () {
    window.localStorage.setItem("color", this.value);
    document.body.style.color = this.value;
}
size.onchange = function () {
    window.localStorage.setItem("size", this.value);
    document.body.style.fontSize = this.value;
}