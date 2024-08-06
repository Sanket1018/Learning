// Argument keyword in JavaScript

// It will give basically the array of the arguments that we are passing
// It should not be consider as array because we cannot apply map,foreach like method on it.

function add() {
  console.log(arguments);
  console.log();
}

add(2, 3, 4, 5);

function add2() {
  let sum = 0;
  for (let i = 0; i < arguments[i]; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

// We have findout the sum of arguments by using for loop

const add3 = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
};

// const addedSum = add2(5, 4, 4, 4);
// console.log(addedSum);
