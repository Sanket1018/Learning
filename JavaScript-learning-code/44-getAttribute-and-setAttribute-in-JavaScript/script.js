const h1 = document.querySelector("h1");
const paragraph = document.querySelector("p");

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

const abc = document.querySelector('[procodrr = "Sanket"]');
console.log(abc);

const def = document.querySelector("[procodrr]");
console.log(def);

console.dir(abc);

// finding the attributes
const attributeshow = document.querySelector("[procodrr]").attributes;
console.dir(attributeshow);

const attributeshow_ = document.querySelector("[procodrr]").attributes.procodrr;
console.dir(attributeshow_);

// to access the value of attribute using getAttribute

const valueOfAttribute = document
  .querySelector("[procodrr]")
  .getAttribute("procodrr");

console.log(valueOfAttribute);

const heading = document.querySelector("h1").getAttribute("class");
console.log(heading);

// setting the value to elements

document.querySelector("h2").setAttribute("title", "Hello_world");

// We can set the attribute directly for some cases :

document.querySelector("h1").id = "abc";
