let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let charnum = counter;

while (index < friends.length) {
  if (
    typeof friends[index] === "string" &&
    friends[index].charAt(charnum) !== "A"
  ) {
    console.log(`"${++counter} => ${friends[index]}"`);
  }
  index++;
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"
