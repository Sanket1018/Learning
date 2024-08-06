// for each array method is a method in which if we passed function that we call and execute as the number of elements prsent in tehe array

const fruits = ["apple", "banana", "grapes", "mango"]; // here 4 elements are present

fruits.forEach(function () {
  console.log(fruits); // so this function called 4 times and the array prints 4 times
});

fruits.forEach(() => console.log(fruits));
// This is arrow function

function abc(el) {
  console.log(el);
}

fruits.forEach(abc);
