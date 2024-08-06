const message = 'Hello World!';
console.log(message[0]); // String index starts from 0

// String methods and properties
// properties shown the value in suggestion box and function f 

console.log(message.length); // length property 


// trim()
const faltuMessage = '    Hi, I am Sanket';
const finalMessage = faltuMessage.trim().toLowerCase(); 
console.log(finalMessage)

// trimStart
console.log(finalMessage.trimStart());

// trimEnd
console.log(finalMessage.trimEnd());



// toUppercase()
const captilize = finalMessage.toUpperCase(); 
console.log(captilize);

// includes()
console.log(finalMessage.includes('AM')); 
// if present gives true and if not then then false // and it is case sensitive


 // indexof()                                         
console.log(finalMessage);             
console.log(finalMessage.indexOf('a')); // Returns index of that letter
console.log(finalMessage.indexOf('sanket')); // Return the index of 1st letter 
console.log(finalMessage.indexOf('A')); // If letter is not present return the index of -1.

// replace 
const replacedMessage = finalMessage.replace('hi', 'Hello'); // replace the letter which comeds first
console.log(replacedMessage);

// replaceAll
const replacedAllMessage = finalMessage.replaceAll('a', 'b');
console.log(replacedAllMessage);

// concat
console.log(message.concat(' ',finalMessage));

// pad-start 
const lastFourDigits = '1234';
const myAccountNumber = lastFourDigits.padStart(16,'*'); //**************1234 
console.log(myAccountNumber);

// pad-end
const lastThreeDigits = '123';
const myaccountno = lastThreeDigits.padEnd(10,'*'); // 123*******
console.log(myaccountno);

// charAt 
console.log(finalMessage);
console.log(finalMessage.charAt(0));

// charCodeAt
console.log(finalMessage.charCodeAt(0)); // At index 'h' is present and ASCII value of h is 104

// split 
console.log(finalMessage.split(' '));  
console.log(finalMessage.split('i')); // it will split till where i is and i exclusive. ['h', ', ', ' am sanket']



// Template String literal
console.log(`My account number is ${lastFourDigits.padStart('16','*')}`);
const balance = 70000;
console.log(`My account blance is ₹${balance}`)









