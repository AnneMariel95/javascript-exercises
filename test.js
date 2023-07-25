const assert = require("assert");

describe("greet function", () => {
  it("should greet Marcus properly", () => {
    // arrange
    const greeter = require("./index.js");

    // act
    const actualResult = greeter.greet("Marcus");

    // assert
    assert.equal("Welcome to SALT, Marcus", actualResult);
  });

  it("should greet Eliza properly", () => {
    const greeter = require("./index.js");
    const actualResult = greeter.greet("Eliza");
    assert.equal("Welcome to SALT, Eliza", actualResult);
  });

  it("should give error message for ''", () => {
    const greeter = require("./index.js");
    assert.throws(() => {
      greeter.greet("");
    });
  });

  it("should plural greeting for 'Eliza and Marcus'", () => {
    const greeter = require("./index.js");
    const actualResult = greeter.greet("Eliza and Marcus");
    assert.equal("Welcome to SALT, Eliza and Marcus", actualResult);
  });
});
