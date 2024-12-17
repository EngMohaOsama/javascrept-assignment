let p = document.getElementsByTagName("p")[0];
let mainDiv = document.querySelector(".our-element");
let startDiv = mainDiv.cloneNode();
let endDiv = mainDiv.cloneNode();

// remove paragraph
p.remove();

function addAttr(el, ind) {
    el.className = ind.toLowerCase();
    el.title = `${ind} element`;
    el.setAttribute("data-value", ind);
    el.textContent = ind;
}
addAttr(startDiv, "Start");
addAttr(endDiv, "End");

// add the before and after divs
mainDiv.before(startDiv);
mainDiv.after(endDiv);