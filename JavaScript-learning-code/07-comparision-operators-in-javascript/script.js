const userAge1 = 18;
const userAge2 = '18';

console.log(userAge1 == userAge2); // true implicit conversion

const userAge3 = 18;
const userAge4 = '18';

console.log(userAge3 === userAge4); // false explicit conversion we have to manually.
console.log(userAge3 === +userAge4); // true explict/manully converted to string to number

// !=
console.log(userAge1!=userAge2); // false beacuse they are equal
console.log(userAge3!==userAge4); // true because it checks type also 

// <, >,<=,>= they are easy no need to explain