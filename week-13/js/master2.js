// Variables
let add = document.querySelector('.classes-to-add');
let remove = document.querySelector('.classes-to-remove');
let current = document.querySelector("[title ='Current']");
let cls = document.querySelector('.classes-list div');

// add and remove function
function addRem() {
    //resting value of div
    document.querySelectorAll("span").forEach(el => el.remove());

    // add and remove classes
    for (let i = 0; i < this.value.trim().split(" ").length; i++) {
        if (add.value)
            current.classList.add(add.value.trim().split(" ")[i])
        else if (remove.value)
            current.classList.add(remove.value.trim().split(" ")[i])
    }
    this.value = "";

    //add and remove span
    if (current.classList.length) {
        [...current.classList].sort().forEach(el => {
            let clSpan = document.createElement('span');
            clSpan.textContent = el;
            cls.append(clSpan);
        })
    } else cls.textContent = 'No Class To Show';
}

add.onblur = addRem;
remove.onblur = addRem;