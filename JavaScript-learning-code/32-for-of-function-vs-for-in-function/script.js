const fruits = ["apple", "banana", "grapes", "mango"];

// Accessing the elements by for loop

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Another way is for of loop

for (const a of fruits) {
  console.log(a);
}

const userName = "Sanket";
for (const letter of userName) {
  console.log(letter);
}

// but in case of for of loop we cannnot use it object we can use it only with iterative objects

const person = {
  userName: "Sanket",
  age: 22,
};

for (const key in person) {
  console.log(key);
  console.log(key + ":" + person[key]);
}

const personKeys = Object.keys(person);
const personValues = Object.values(person);
const personEntries = Object.entries(person);

for (const key of personKeys) {
  console.log(person[key]);
}

console.log(personValues);
console.log(personEntries);
