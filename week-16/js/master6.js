let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
function chosenFriend(obj) {
    let t, a, tr, s, c;

    // for (let i = 0; i < myFriends.length; i++) {

    //     if (obj === i + 1) {
    //         ({ title: t, age: a, available: tr, skills: [c, s] } = myFriends[i]);
    //     }
    // }
    if (obj === 1) {
        ({ title: t, age: a, available: tr, skills: [, s] } = myFriends[0]);
    } else if (obj === 2) {
        ({ title: t, age: a, available: tr, skills: [, s] } = myFriends[1]);
    } else if (obj === 3) {
        ({ title: t, age: a, available: tr, skills: [, s] } = myFriends[2]);
    }
    let w = "Not Available";
    if (tr) w = "Available";
    console.log(t);
    console.log(a);
    console.log(w);
    console.log(c);
    console.log(s);
}
chosenFriend(chosen);

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"