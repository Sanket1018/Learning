// Normally we can write functions as

function add(a, b) {
  // function declaration
  return a + b; // function defination
}

// function expression

const add1 = function add1(x, y) {
  // function expression
  return x + y; // function defination
};

const addresult = add(10, 20);
console.log(addresult);
const add1result = add1(20, 30);
console.log(add1result);

// There is another way create function expresion with arrow functions

const sqaure = (num) => num * num;
// No need to write function keyword,name,return keyword and curly brackets

const add3 = (a, b) => a + b;

setTimeout(() => {
  console.log("Hi");
}, 1000);

const random = () => Math.floor(Math.random() * 10) + 1;
