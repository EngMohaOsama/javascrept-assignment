function theAgeInTime(theAge) {
  if (theAge < 10 || theAge >= 100) {
    console.log(`theAge Out Of Range`);
  } else {
    console.log(`Your theAge :`);
    console.log(`- ${theAge * 12} Months`);
    console.log(`- ${theAge * 52} Weeks`);
    console.log(`- ${theAge * 365} Days`);
    console.log(`- ${theAge * 365 * 86400} Secands`);
  }
}

// Needed Output
theAgeInTime(110); // theAge Out Of Range
theAgeInTime(38); // Months Example => 456 Months
