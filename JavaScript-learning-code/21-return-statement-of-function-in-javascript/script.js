function addTwoNumbers(a, b) {
  return a + b;
}

const result = addTwoNumbers(2, 3);
console.log(result); // 5

// WE can pass array,object,variable and even function as a parameter

const result2 = addTwoNumbers(addTwoNumbers(2, 6), addTwoNumbers(10, 2));
console.log(result2); // 20
