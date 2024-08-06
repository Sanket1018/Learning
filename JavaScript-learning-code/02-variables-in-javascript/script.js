// There are three types of variables present in JavaScript :
// 1. var
// 2. let
// 3. const

// var: they can be accessed outside the block
// let: they are block level 
// const: is also block level and they cannot be changed

// difference between var and let/var 
    //  1.
    //  var can be accessed outside the block
    //  let/const cannot be accessed outside the block they are block level

    // 2. 
    // if var is used before declaration and intilization it will does not give error ir sotore the value undefined.
    // if let/const used before declaration and intilization it gives error.





var firstName = 'Sanket';
let lastName = 'Khokade'

let age = 22;


firstName = 'Amit';

let userInfo = "Hi My name is "+ firstName+ " "+lastName+" I am "+age+" years old."
console.log(userInfo);

const hoursInDay = 24;
console.log(hoursInDay)
{
  var friendName = 'Rohan';
  let city = 'Sangli'; // let and const have block level scope they cannot be accessed outside the block.
}

console.log(friendName)
// console.log(city)


// There are different rules that we have to follow while declaring the variables.

// 1. Varaible name should not be start with number.
// 2. Symbols not allowed other than $ and _
// 3. Reserved keywords are not allowed in variables
// 4. Varaibles are case sensitive

