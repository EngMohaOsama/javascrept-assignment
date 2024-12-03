let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = +true;

for (let i = +false; i < friends.length; i++) {
  if (friends[i].charAt(0).toLowerCase() !== letter) {
    console.log(`"${counter} => ${friends[i]}"`);
    counter++;
  }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
