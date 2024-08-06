sayHi();
const username = "Sanket";
const userAge = 22;

function sayHi() {
  const a = 10;
  const b = 20;
  console.log(a, b);
  sayNamste();
}

function sayNamste() {
  console.log("Namste Javascript function");
  introduceMe();
}

function introduceMe() {
  console.log("Hello I am Sanket");
  console.log("I am JavaScript Developer");
  introduceMe();
}

// 1. Memory creation phase :

// first memory creation phase is completed so in case of function always all the code inside is present by default during memory creation.
// variables have default value undefined.

// 2. Code execution phase/global execution phase

// Variables have there values
// calling of funtion is done

// In function Local exevution context is created

// In that local context again two steps are performed :

// 1.Memory Creation Phase
// 2.Code execution phase
