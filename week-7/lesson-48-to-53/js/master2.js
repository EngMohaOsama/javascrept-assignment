let start = 10;
let end = 0;
let stop = 3;

for (; start > end; start--) {
  if (start === 3) break;
  else if (start < 10) {
    console.log(`0${start}`);
  } else {
    console.log(`${start}`);
  }
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
