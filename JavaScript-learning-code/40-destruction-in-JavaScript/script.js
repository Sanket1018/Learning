const colors = ["Red", "Green", "Blue", "Pink", "Yellow"];

// Destructing is a simple way to access elements other than traditional method
// WE can use destructing on arrays and objects
// Normally when we have to acccess the element we use :

// const color1 = colors[0];
// const color2 = colors[1];

// destruction way :

// Array :
const [color1, color2] = colors;
console.log(color1);
console.log(color2);

// object

const user = {
  name: "Sanket",
  age: 22,
  address: {
    city: "Pune",
    state: " Maharashtra",
  },
};

// const name = user.name;
// const age = user.age; // Traditional

const { name, age } = user; // Mostly used destruction
console.log(name);
console.log(age);

const { name: userName, age: userAge } = user; // changing the key name basicllay
console.log(userName);
console.log(userAge);

// mutltilevel destructing

// Two lines in one
// const {
//   address: { city },
// } = user;

// Separate destruction same meaning
const { address } = user;
const { city } = address;
console.log(city);

// We can apply destructing on function
function intro({ age, name }) {
  console.log(age, name);
}
intro(user);

function printColor(a, b, g) {
  console.log(a, b, g);
}
printColor(colors);

function printColor({ 3: color2 }) {
  console.log(color2);
}
printColor(colors);
