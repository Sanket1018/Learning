// Some method in JavaScript

// It will return true if condtion matches with any one of the array element

const evenNumbers = [2, 4, 6, 9, 10];

const result = evenNumbers.some((num, i) => {
  if (num % 2 === 1) {
    console.log(i);
  }
  return num % 2 === 0;
});
console.log(result);
console.log("a");

// every method in JavaScript
// It will return the true when all the elements in the array matches the return condition

const result2 = evenNumbers.every((num, i) => {
  if (num % 2 == 0) {
    console.log(i);
  }
  return num % 2 == 0; // false // because there is 9 in this call we have get all condition true otherwise it return the false
});
console.log(result2);
