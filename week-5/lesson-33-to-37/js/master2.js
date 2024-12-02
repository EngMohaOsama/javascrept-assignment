let num1 = 20;
let str = "9";
let str2 = "20";
num1 == str;

if (num1 == str) {
  if (num1 === str) {
    console.log(`${num1} Is The Same Value As ${str}`);
  } else {
    console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
  }
} else if (num1 != str2 && typeof num1 != typeof str2) {
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
} else if (str != str2 && typeof str == typeof str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
} else {
}

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
