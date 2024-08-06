const myNameForSearch= 'Sanket';

let user = {
              firstName : 'Adarsh',
              lastName : 'Singh',
              education : '12',
              pata : {
                location : 'Mumbai',
                state : 'Maharashtra',
                moredetails:{
                  gender : 'Male',
                  isGraduate : false,
                  isStudent : true,
                  subject : 'science'
                }


              }
}

// Basically when we add the values in browser console the address of object coming in memory is same for both previous and after adding the values.
//  Note : but when make changes directly into code then object address changes(he shows only in console changes have same address)

// user = {} // TypeError: Assignment to constant variable. because it is const object

// user = {}

// Now after using the let variable we can to modify the object but previous data Javascript will delete automatically.

// How to delete object
delete user.pata.moredetails;

// object.seal()

// It does not alloew to add or delete properties in that object
Object.seal(user) 
user.home = 'abc';

Object.seal(user.pata)
user.pata.country = 'India'

// note here pata is stored in user object but when we use seal on user we are able to add the properties in pata so we want to seal pata also if we dont want to allow the adding/ deleting properties in pata object also.


// Object.freeze 

// It does to add,delete and modufy the values that is changes in object 

Object.freeze(user);
user.firstName = 'Rohan'; // Not allowed to change
user.pata.location = 'Pune'; // Not allowed to change 

// How to check key is present or not 
'mobile' in user;