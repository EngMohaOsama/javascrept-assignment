
let divOne = document.querySelector('.one');
let divTwo = document.querySelector('.two');


let tempContent = divOne.innerHTML;
divOne.innerHTML = divTwo.innerHTML;
divTwo.innerHTML = tempContent;


let tempTitle = divOne.getAttribute('title');
divOne.setAttribute('title', divTwo.getAttribute('title'));
divTwo.setAttribute('title', tempTitle);


divTwo.innerHTML = divTwo.innerHTML + " 2";


console.log(document.querySelector(".one"));
console.log(document.querySelector(".two"));