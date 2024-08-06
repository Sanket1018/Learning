// BOM stands for Browser Object Model
// This concept made by broswer developers

// window object in JavaScript

console.log(window);
// There are different properties and function involved in window object

// -- 1.Location

// 1.reload
// console.log(window.location.reload());
// window keyword is optional we can also write as
// console.log(location.reload());
// It will refresh infintly

// setTimeout(() => location.reload(), 2000);

//2.href
// href is a property
console.log(location.href);
location.href = "https://developer.mozilla.org/en-US/";
// Redirect the location to that page

// -- 2.history

// 1. It contains differnt functions like back and forward

// history.back(); /// it is used to go one step back and
// history.forward() // it is used to go one step forward
// When it have dont have length to bgo back then it print undefined same as forward also.

// 2. go : histrot.go(-1) works simliar as back
//  history.go(1) works similar as forward
// one difference is we add any number of steps manually history.go(5)
