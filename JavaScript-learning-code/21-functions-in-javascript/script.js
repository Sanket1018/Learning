// Function is a block of code that is reused when we want to in program

// function defination
function introduceMe(username, role, age) {
  // Here we can pass the aruguments
  // console.log(typeof username);
  // console.log(typeof role);
  // console.log(typeof age);
  console.log("Hi");
  console.log(`I am ${username || "procodrr"}.`);
  console.log(`I am a ${role || "Teacher"}.`);
  console.log(`I am ${age || 26} years old.`);

  return 123;
}

// function calling
// introduceMe(); // in this case we call the function but if want the retuen value then we have to store it in varable and then it is ready to use.

// const returnValue = introduceMe();
// console.log(returnValue);

// Passing the argument and parameters
introduceMe("Sanket", "Web Developer", 22); // Here we can call and pass the parameters
introduceMe("Akash", "Clerk", 26);
introduceMe("Rohan", "Andriod Developer", 22);
introduceMe();
