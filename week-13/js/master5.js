let myArray = [...document.body.children];
myArray.forEach(
    el => el.onclick = () => console.log(`this is ${el.localName}`)
)