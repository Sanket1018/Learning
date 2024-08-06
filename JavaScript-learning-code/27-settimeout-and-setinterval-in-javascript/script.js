// setTimeout('console.log("Hi")', 1000);

// // setTimeout is a internal function that is used to pause the code some time and print that code
// // setTimpeout has two aruguments first one is for the code that you want and second one is for time to stop that code

// setTimeout(
//   `         console.log('Hi')
//             console.log('I am')
//             console.log('Sanket')`,
//   4000
// );

// setTimeout('console.log("Hi")', 3000);
// setTimeout('console.log("I am")', 4000);
// setTimeout('console.log("Sanket")', 5000);

// Basically setTimoeout is a function and return the value that is ID last setTimeout id can be shown by us.
// clearTimeout(id) : it is used to clear the timeout on that id

// In above example we passed the string and number till we not passed so it was not a higher order function. So we have to pass function

const timer1 = setTimeout('console.log("Hi")', 1000);
const timer2 = setTimeout('console.log("I am")', 0);
const timer3 = setTimeout(a, 4000);

function a() {
  console.log("Hello World");
}

console.log("This is ");

// Basically the code behind written setTimeout considering it is higher order function so just we have to pass function name only.

// When we give time in setTimeout as 0 and if we write to console statment after setTimeout then that console statement will runs first.
//this happens beause of event loop,call stack,asyncrouns,synchronus code we will learn that later deeply in another video
// We can clear the setTimeout by clearTimeOut

// clearTimeout(timer3);

// setInterval - it will also used to perform delay in the code but the code will delay repeatly and printed.

// const timer4 = setInterval('console.log("code")', 1000);
const timer5 = setInterval(b, 4000, "fbjfb", 45); // we can add the mutlipe arguments but first two are must and they have some task other are array/objects present in array arguments
// clearInterval(timer5); // as we timer5 that stores id which is return value of setInterval()

function b() {
  console.log("Hello Universe");
  console.log(arguments);
}

// we can pass the annoymous function in setTimeout or setInterval
const timer6 = setInterval(function () {
  console.log("Hii");
}, 2000);

// clearInterval(timer6);
