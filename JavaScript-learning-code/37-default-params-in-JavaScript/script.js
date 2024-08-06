function multiply(a, b = 2) {
  return a * b;
}

const result = multiply(10, 20);
console.log(result);

function rollADice(numbeofSides = 6) {
  return Math.floor(Math.random() * numbeofSides) + 1;
}
