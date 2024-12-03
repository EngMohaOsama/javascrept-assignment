let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (typeof haystack.indexOf(needle) == "number") {
  console.log("Found");
} else {
  console.log("Not found");
}

if (typeof haystack.lastIndexOf(needle) == "number") {
  console.log("Found");
} else {
  console.log("Not found");
}

if (haystack.includes(needle) == true) {
  console.log("Found");
} else {
  console.log("Not found");
}
