function outer() {
  const a = 10;
  const b = 20; // Basiclly this are outer varaibles goes into closure
  function parent() {
    function add() {
      console.log(a + b);
    }
    return add;
  }
  return parent(); //Here in actual we also can pass the function directly.
}

const add1 = outer();
console.dir(add1);

// console.dir(add);

// What is closure

// 1.  If we use outer function varaibles into inner function and we return that inner function then closure is created.
// 2.  Normally when we call the function local execution context is created and execution of that function it destroyed.
// 3.  But in case of closure we return that inner function uses the varaibles of outer function so they can be stored into closure.
