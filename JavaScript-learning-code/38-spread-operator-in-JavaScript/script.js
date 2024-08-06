// Spread Opertaor is used to perform a operations on a same as it create a new array

const evenNumbers = [2, 4, 6, 8];

const myNumbers = [...evenNumbers];
console.log(myNumbers);

// Spread operator also used for joining two arrays, Strings and objects

//How to join arrays
const nums1 = [1, 2, 1, 2, 3];
const nums2 = [2, 5, 6, 8];

const myName = "Sanket";

const joinedArray = [...nums1, ...nums2];
console.log(joinedArray);

// How to copy a new object and add a new key-values using spread operator

const user = {
  userName: "Sanket",
  userAge: 22,
};

const updatedUser = {
  ...user,
  city: "Pune",
};

console.log(updatedUser);

// How to use spread operator in functions

// passing spread array
function add() {
  console.log(arguments);
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

const result = add(...joinedArray);
console.log(result);

// we cannot pass the objects with spread opeator
// we can pass array and string

// Passing spread string
function add2() {
  console.log(arguments);
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

const result2 = add(...myName);
console.log(result2);
