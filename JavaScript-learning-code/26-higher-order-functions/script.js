// Higher order functions in JavaScript
// Yhe function In which function we are passing the function as a paramater callled as a higher order function
function a(b) {
  console.dir(b);
  b();
}

// We can pass the String,number,array,objects and even function in the function
// a("Sanket");
// a(20);
// a([2, 4, 6, 8]);
// a({ username: "Sanket", userAge: 22 });

// function sayHii() {
//   console.log("Sayhiiiii");
// }

// sayHii is a callback function : When we call the function the function which is used to pass that function is called as callback function.
// a(sayHii);

// const x = sayHii;
// x();
// x.age = 76;
// console.log(x.age);
// // We can pass and return the function in function

// callback function : When we call the function the function which is used to pass that function is called as callback function.
a(function () {
  // Anonymus function
  console.log("Hiiiiiiiiiiiiiiiiiiiiiii");
});
