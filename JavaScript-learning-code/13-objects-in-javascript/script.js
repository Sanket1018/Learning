const StudentName = 'Akash'; // it is for to search context
const myName = 'Rohan'

const user1 = {firstName : 'Sanket',
               lastName : 'Khokade',
               age : 22,
               education : 'BTech'
              }

const user2= {firstName : 'Sanket',
                // 'last-Name' : 'Khokade',
                lastName : 'Khokade',
                age : 22,
                education : 'BTech',
                // Rohan: 'Developer
                pata:{
                  location: 'Pune',
                  state :'Maharashtra',
                  moredetails: {
                    population : 44447467,
                    area : '200sqkm'
                  }         
                }
               }
// objects are non-primitive datatype(reference datatype)
// If the value of objects are also same but the address is different

const userName1 = '';
const userName2 = '';

// Address of same string is same if they are not initiized in different way

const userName3 = 'Aka' + 'sh';
 

console.log(user2);
console.log(user2.firstName);
console.log(user2["lastName"]);

// console.log(user2[myName]); // if it is outside and we not used as value as a key then it is undefined and if that value used as key then the the new value assigned to it in object will printed as a output


console.log(user2['first' + 'Name']);

console.log(user2.pata.location);
