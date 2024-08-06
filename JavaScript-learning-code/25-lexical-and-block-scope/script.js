"use strict";
const username = "Sanket";
const userAge = 22;

// debugger;
function subtract() {
  const x = 5;
  const y = 10;
  const z = x + y;

  function child() {
    const childName = "Golu";
    console.log(childName);
    console.log(username); // inner function,block can access the outside varibales and functions. inner functions and varibles can not able to access from outside.
    console.log(z);

    function grandchild() {
      const grandChildName = "Molu";
      console.log(grandChildName);
      console.log(childName);
      console.log(x);
      console.log(y);
      console.log(z);
      console.log(username); // inner function is able to access outer means able to parents of that function this scope is called as lexical scope.
      // The accessing outer functons,varaibles in inner callesd closure
      // Basically when we use outer variable into inner function closure is created.

      // var num1 = 123; // var,let,const variables present in inside the functions cannot be able use outside the function
      // console.log(num1);

      {
        var num2 = 100;
      }
      console.log(num2); // var variable can be used outside the block not outside the function
    }
    console.log(num1);
    grandchild();
  }

  child();
}

subtract();
