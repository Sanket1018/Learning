const fruitsCollection = [
  "Apple",
  "Banana",
  "Grapes",
  "Dates",
  23,
  null,
  undefined,
  true,
  false,
  {
    name: "Sanket",
    as: { age: 22 },
  },
];
console.log(fruitsCollection);

fruitsCollection[4] = "Oranges";
console.log(fruitsCollection);

console.log(fruitsCollection.length);

// Array stores collection of same elements

fruitsCollection[20] = "Coconut";
console.log(fruitsCollection); // ['Apple', 'Banana', 'Grapes', 'Dates', 'Oranges', null, undefined, true, false, {…}, empty × 10, 'Coconut']0: "Apple"1: "Banana"2: "Grapes"3: "Dates"4: "Oranges"5: null6: undefined7: true8: false9: {name: 'Sanket', as: {…}}20: "Coconut"length: 21[[Prototype]]: Array(0)

// How to add and remove the elements in array

fruitsCollection[11] = "Chiku";
console.log(fruitsCollection);

fruitsCollection[fruitsCollection.length] = "Water Melon";
console.log(fruitsCollection);

// push is used to add the elements in array
fruitsCollection.push("Papaya");
console.log(fruitsCollection);

// pop is used to delete the elements in array
fruitsCollection.pop();

// How we can store key value pairs in array

// const newArray = [firstname:'Sanket']; // It will give error

const newArray2 = [];
newArray2.firstName = "Sanket";
console.log(newArray2);

// so we forcefully able to add key-value pairs in array but it is not good array are not created to store key-value pairs and also it says that the length is 0.

const newObject = {};
newObject.firstName = "Rohan";
console.log(newObject);
