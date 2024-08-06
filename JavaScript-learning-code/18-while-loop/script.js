// Printng 1 to 10 numbers using while loop

let num = 1;

while (num <= 10) {
  console.log(num);
  num++;
}

const friends = ["Akash", "Rohan", "Sanket", "Nitin"];
// let i = 0;

// while (i < 4) {
//   console.log(firends[i]);
//   i++;
// }

let i = 0;

while (i < friends.length) {
  console.log(`${i + 1}. ${friends[i]}`); // 1.Akash 2.Rohan
  friends[i] = friends[i] + " Procodrr"; // After printing 1st index element(Akash) that value is replaced with 'Akash procodrr'
  i++;
}

console.log("Program ended");
