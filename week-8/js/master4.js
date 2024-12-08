function checkStatus(a, b, c) {
  let name, age, isAvailable;

  if (typeof a === "string") name = a;
  if (typeof b === "string") name = b;
  if (typeof c === "string") name = c;

  if (typeof a === "number") age = a;
  if (typeof b === "number") age = b;
  if (typeof c === "number") age = c;

  if (typeof a === "boolean") isAvailable = a;
  if (typeof b === "boolean") isAvailable = b;
  if (typeof c === "boolean") isAvailable = c;

  if (isAvailable === true) {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`
    );
  } else {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`
    );
  }
}

checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
