debugger;

const username = "Sanket"; // Varaible decalred outside able to access anywhere in program. const and are script
const userAge = 22;
var a = 50; // var variable have a global scope by default they are accesible anywhere in program

function add() {
  const x = 10; // have a scope only inside the block
  const y = 20; // have a scope only inside the block
  console.log(x + y);
  console.log(username); // As it is declared outside able to access anywhere.
}

function subtract() {
  const username = "Naresh"; // it looks nearer varaible username which is this username.
  const x = 10; // have a scope only inside the block
  const y = 20; // have a scope only inside the block
  console.log(x - y);
  console.log(username); // As it is declared outside able to access anywhere.
}

add();
subtract();

// console.log(x); // Not able to access outside the block
