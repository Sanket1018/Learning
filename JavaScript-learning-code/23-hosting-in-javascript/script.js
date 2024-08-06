console.log(username);

/// 1. Hosting
// Hosting means appering the declare and intizied variale funcation upper side of the program
var username = "Sanket";

// In case of const and let also the hosting is done but the undefined value of let and const can ber storesd in temporal dead zone
// Basically there are two ways to write a functions

// 2.
function sayHi() {
  // function declaration
  console.log("Hi"); // function defination
}

// console.log(sayHello); // ReferenceError: Cannot access 'sayHello' before initialization
const sayHello = function () {
  // function expression
  // 3. anaonoyms function
  console.log("Hello"); // function declaration
};

// In case of function expression the function as assigned with assignment operator.
// here it is attached to const variable so we cannot use the function before its declaration and intizaltion
