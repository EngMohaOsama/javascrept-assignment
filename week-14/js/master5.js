let div = document.querySelector("div");
function countDown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "5") {
        open(
            "https://elzero.org/",
            "_blank",
            "width = 400, height = 600, top = 200px, right = 200px"
        );
    }

    if (div.innerHTML === "0") clearInterval(counter);
}
let counter = setInterval(countDown, 1000);