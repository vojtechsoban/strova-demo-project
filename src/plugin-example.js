const toUpper = input => {
  // assert input notBlank : Input is blank
  return input.toUpperCase();
};

console.log("console.log(toUpper('Hello world!')); // => HELLO WORLD!");
console.log(toUpper('Hello world!'));

console.log("console.log(toUpper(' ')); // => Input is blank followed ' ' on new line.");
console.log(toUpper(' '));
