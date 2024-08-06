const fruits = ["Apple", "Banana", "Grapes"];
const myfruits = fruits; // copied the elemnts of array

console.log(fruits);
console.log(myfruits);

myfruits.push("Oranges");
myfruits.push("Water Melon"); // Here we added the new elements in myfruits array.

console.log(myfruits);
console.log(fruits); // Here orignal array is changed

// how to copy objects

const user1 = {
  fitstName: "Sanket",
  lastName: "Khokade",
};

// const user2 = user1;

const user2 = {};

console.log(user1);
console.log(user2);

// user2.education = "BTech";

// console.log(user2);
// console.log(user1); // Here orignal object is changed

// How to copy the objects without affecting the original object
// object.aassign(which object, from which object)
console.log("============");
Object.assign(user2, user1);
console.log(user2);
console.log(user1);

console.log("===============");
user2.education = "BTech";
console.log(user2);
console.log(user1);

// But how it work in string

const firstname = "Sanket";
const sname = firstname;

console.log(firstname);
console.log(sname);

console.log(sname + " " + "Khokade");

console.log(sname);
// In case odf string we are bascially use = operator so new address created at this address the mew string is sored so it is differently stored from orignal string
// so that is why there is no affect on original string

// How to copy the elements in array and if any operation perform on it not have any changes in original array
const fruits2 = ["Papaya", "Coconut"];
const myfruits2 = [];

Object.assign(myfruits2, fruits2);
console.log(myfruits2);

myfruits2.push("Mango");
console.log(myfruits2);
console.log(fruits2);

// Now in ES6 we uses spade operatot to do this thing

const fruits3 = ["Apple", "Banana"];
const myFruits3 = [...fruits3]; // Sparad operator

myFruits3.push("Orange");
console.log(myFruits3);
console.log(fruits3);

// Another way to copying bur sparde operator is used in companies rather than object.assign, concat and slice

//
const fruits4 = ["Coconut", "Banana"];
const myFruits4 = [].concat(fruits4);

myFruits4.push("Oranges");
console.log(myFruits4);
console.log(fruits4);

// slice

const fruits5 = ["Coconut", "Banana"];
const myFruits5 = fruits5.slice();

myFruits5.push("Oranges");

console.log(myFruits5);
console.log(fruits5);

// Note : In case of object inside the object the address of that inside object remains same even after applying sparade opeators so new
// values can be add/replicate to their original object also so we have to use deep copying which is level 2 copying
// shallow copying is level 1 copying
