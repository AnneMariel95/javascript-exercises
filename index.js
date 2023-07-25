function greet(namePassedIn) {
  if (namePassedIn === "") {
    throw new Error("This is an error.");
  }
  return "Welcome to SALT, " + namePassedIn;
}

module.exports.greet = greet;

const greeting = greet("Marcus");
if (greeting === "Welcome to SALT, Marcus") {
  console.log("IT WORKS");
} else {
  console.log("IT FAILS");
}
