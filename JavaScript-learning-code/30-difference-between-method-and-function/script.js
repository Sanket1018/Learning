// method : when we write the function into the object it becomes method
// Every method is a function but every function is not be method

const maths = {
  add: function add(a, b) {
    return a + b;
  },

  square: function sqaure(num) {
    return num * num;
  },
  substract(a, b) {
    // we can avoid here the key and function keyword
    return b - a;
  },
};

console.log(maths.add(10, 20));
console.log(maths.square(4));
console.log(maths.substract(10, 20));
