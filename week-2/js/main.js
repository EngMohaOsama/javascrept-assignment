let a = "10";
let b = "20";
console.log(a + b); // Normal Concatenate => 1020
console.log(typeof (a + b)); // Normal Concatenate => String
console.log(`${a}${b}`); // Template Literals Way => 1020
console.log(typeof `${a}${b}`); // Template Literals Way => String

console.log("Normal Concatenate\n" + b + "\n" + a);
/*
  Normal Concatenate
  20
  10
*/

console.log(`
"Normal Concatenate"
${b}
${a}
`);
/*
  Template Literals Way
  20
  10
*/
