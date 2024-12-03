/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let counter = 1;

document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have 3 Admins</div>`);
mainloop: for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] !== "Stop") {
    document.write(`<hr>`);
    document.write(`<div>`);
    document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}`);
    document.write(`<h3>Team Member:</h3>`);
    let counter = 1;
    for (let j = 0; j < myEmployees.length; j++) {
      if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
        document.write(`${counter}- ${myEmployees[j]}<br>`);
        counter++;
      }
    }
    document.write(`</div>`);
  } else {
    break mainloop;
  }
}
