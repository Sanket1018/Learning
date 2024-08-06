const userAge = 24;

const isCollegeStudent = (userAge >= 18) && (userAge <= 24);
console.log(isCollegeStudent);4

const isSchoolStudent = (userAge >= 5) && (userAge <= 17);
console.log(isSchoolStudent);

const student = (isSchoolStudent || isCollegeStudent);
console.log(student);



// Truthy and Falsy values

// Level 1
const andResult = 0 && 2 ; // returns the falsy value 0 is falsy value as the first value is falsy it will not check second value. In case of falsy it return that value.
console.log(andResult);

const  orResult = 0 || 2; // returns the truthy value as the first is falsy it will check second and second value can be returned.
console.log(orResult);

const andResult2 = 2 && 0; // First vlaue is true so it checks for second value and second value is false so it return the truth value 2.
console.log(andResult2);

const orResult2 = 2 || 0; //first value is true I or operator have no need to second check value;
console.log(orResult2);   


// so conclusion is that complier have last value that return.
 // imp // If compiler reaches to second value second value can be return if not in some cases there is need to go to second value check then fist value return.

// Level 2
const andResult3 = 'Hello' && null;
console.log(andResult3); // null

const orResult3 = null || 'Hello';
console.log(orResult3); // 'Hello'

// Level 3 
const andResult4 = null && 4+4; //null
console.log(andResult4);

const orResult4 = null || -4+4; 
console.log(orResult4); // Evluate the expression

const valueof = console.log('Hello'); // undefined
console.log(valueof);

const andResult5 = 'Hello' && console.log('Hello1'); 
console.log(andResult5); // undefined

const orResult5 = undefined || console.log('Hello2');
console.log(orResult5); // undefined 


// Bitwiswe operator 

const bitwise_num = 2 & 3 ;
console.log(bitwise_num);

// Not operator 

const notoperator = !null; // null have falsy value   
console.log(notoperator);