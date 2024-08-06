const nums1 = [1, 2, 3, 4];

// Rest Params can be passed as parameters
// And Spread operator is passed in function call

// function add(a, b, ...nums) {
//   console.log(a);
//   console.log(b);
//   // Rest params
//   console.log("nums : ", nums);
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//   }
//   return sum;
// }

// So what is difference between spread and Rest parameters
// 1. Rest Params can be passed as parameters and Spread operator is passed in function call
// 2. Rest params collect the elements and spread operator spread and join and collects

// const result = add(...nums1, 8, 9, 56); // spread opeartor
// console.log(result);

// we can use array methods on Rest params

function add2(...nums) {
  console.log(nums);
  return nums.reduce((acc, curr) => acc + curr);
}

const result2 = add2(...nums1);
console.log(result2);
