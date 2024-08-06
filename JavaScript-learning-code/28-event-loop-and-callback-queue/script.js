console.log("Hi-1");

function hello() {
  console.log("Hello World");
}

for (i = 0; i <= 3; i++) {
  console.log(i);
}

hello();

// now here we can add asynchronus code for example setTimeout()
// it does not directly go inside the call stack.

setTimeout(hello, 2000);
setTimeout(hello, 4000);
setTimeout(function () {
  console.log("Hi-3");
});

// when the setTimeout function came it goes into web api there it track the time and goes into callback queue and then event loop can put it from
// callback queue to call stack
// But syncronus runs simultanously by javascript engine there is resbonsity of web api and callback queue and event loop to perform asynchronus code.

console.log("Hi-2");
// So above code is synchronus code. It will execute step by step and goes directly into call stack.
// by asynchronus code goes into web api then callback queue and event loop send it from callback to call stack
// We can see how event loop work on event loupe website

// If some execution is performing in call stack when functions have to go from callback queue to call stack then the functions in callback
// wait there until all the execution is done in call stack
