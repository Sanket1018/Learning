const evenNumbers = [0, 2, 4, 6, 8];
console.log(evenNumbers);

// shift is similar to pop but shift remove the elements from front side.

evenNumbers.shift(); // Remove the elements from first.
console.log(evenNumbers);

// unshift is similar to push but unshift add the elements from front side

evenNumbers.unshift(-2); // Add the elements from first.
console.log(evenNumbers);

// concat

const evenNumbers2 = [2, 4, 6, 8];
const fruits = ["Apple", "Banana", "Grapes"];
const oddNumbers = [1, 3, 5];
console.log(evenNumbers2.concat(fruits, oddNumbers));

// indexOf

console.log(evenNumbers2.indexOf(6)); // returns the index of that element // case sensitive
console.log(evenNumbers2.indexOf(100)); // if not exists then return -1
// if two same values then first value index considered.

// include
console.log(evenNumbers2.includes(100)); // checks it is present or not // false // case sensitive
console.log(evenNumbers2.includes(6)); // true

// reverse

const reverseArray = fruits.reverse();
console.log(reverseArray);
console.log(fruits);

const reverseEven = evenNumbers2.reverse();
console.log(reverseEven);
console.log(evenNumbers2);
// Note here after reversing the array original array also reversed

// sort
// It is used to arrange the elements into alphabetically.
// It only work on alphabets basically.
// It will convert the alphabet into ASCII code and compare it so small letter comes after the captial.
const arraysort = fruits.sort();
console.log(arraysort);

const array3 = [1, 10, 11, 2, 20, 15, 3, 30];
console.log(array3.sort()); // Not able to sort the numbers properly
console.log(array3);
// Note sort change the original array

// slice
// It basiclly returns the new array cutting the elements that we want
// It will not change the oringinal array

const sliceArray = evenNumbers.slice(2);
console.log(sliceArray);

const sliceArray2 = evenNumbers.slice(1, 4); // Strats from 1 and end with 3 notre 4 is exclusive
console.log(sliceArray2);

// splice
// It is powerful it will change the original array
// It will give three options (from which element we, how many element we want to remove, which elements we want to add)

console.log(evenNumbers); // [-2, 2, 4, 6, 8]
const spliceArray = evenNumbers.splice(0, 2, 2); // starts from 0 index remove two elements add 2 as a new element in that place.
console.log(evenNumbers);
[2, 4, 6, 8];
