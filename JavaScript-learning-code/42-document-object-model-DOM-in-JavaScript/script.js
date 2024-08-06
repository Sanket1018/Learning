// DOM stands for Document Obejct Model
// It present in the window object

// Basically widow object refers to window of screen
// and DOM refers to viewport of screern

// Basiccally using properties and functions present in the document object we change/manipulate the structure of the HTML

console.log(document);
console.dir(document);

// Changing the structure of html using dom properties and functions

// innerHTML
// document.body.children[2].innerHTML = "<i>Sanket<i>"; //Sanket

//innerText
// document.body.children[2].innerText = "<i>Sanket<i>"; //<i>Sanket<i>

// we can change the source of the image
document.body.children[5].src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA__DZm6r5ftInH5v6yBY1Awb7LFs7mBzYuQ&s";

// we can store the tag into the varaible

const ullist = document.body.children[6];
console.log(ullist);

// Basically HTML parser connect all the elements present in the document

// In next lecture we will see how to access the children element that we want easily

// Accessing the childern elements present in the dom

// getElementsByTagName -
const paragraph = document.getElementsByTagName("p");
console.log(paragraph); // With this method we will get all p elements present in the HTML collection

// getElementsByClassName -
const css_image = document.getElementsByClassName("css-image")[0];
console.log(css_image);

// getElementById -
const css_image2 = document.getElementById("css-image");
console.log(css_image2);
// There can be only one ID

// querySelector
const css_query = document.querySelector(".css-image");
// It will select the only one element that comes first so here .css-image which have class and who comes first that will select
// Here in case we case css-image for h1 and it comes first then it will h1 comes.
console.log(css_query);

// querySelectorAll

const css_query_all = document.querySelectorAll(".para-border");
console.log(css_query_all); // It will print basically nodelist because it contain many elements

const ordered_list = document.querySelector(".order-list");
console.log(ordered_list);

// for practice change the images by query selector

const imagesurl = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&s",
  "https://media.istockphoto.com/id/1488944909/photo/environment-concept-green-glass-globe-with-a-tree-in-the-forest-with-sunlight-sustainability.webp?b=1&s=170667a&w=0&k=20&c=f89zMjUr7FldJzgS0p8mJyuTxBWgvhv0kBQL7fcSnjs=",
  "https://t4.ftcdn.net/jpg/05/81/42/19/360_F_581421930_4wgxHBtrpzHvDSpNtFKpN2y5PIjOBBKC.jpg",
];

// const imagesAll = document.querySelectorAll("img");
// we can use only forEach method on this

const imagesAll = [...document.images];
// There is another way to select all images
// But if we have to use foreach method then we have to convert it into array and if we have to apply more methods like map and reduce then we havw to spread operator on it.

// console.log(imagesAll);

// imagesAll[0].src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&s";

// imagesAll[1].src =
//   "https://media.istockphoto.com/id/1488944909/photo/environment-concept-green-glass-globe-with-a-tree-in-the-forest-with-sunlight-sustainability.webp?b=1&s=170667a&w=0&k=20&c=f89zMjUr7FldJzgS0p8mJyuTxBWgvhv0kBQL7fcSnjs=";

// imagesAll[2].src =
//   "https://t4.ftcdn.net/jpg/05/81/42/19/360_F_581421930_4wgxHBtrpzHvDSpNtFKpN2y5PIjOBBKC.jpg";

// Using for loop

// for (let i = 0; i < imagesAll.length; i++) {
//   imagesAll[i].src = imagesurl[i];
// }

// using for each loop
imagesAll.forEach((images, i) => (images.src = imagesurl[i]));

// We can give option to select element only that element
// for example when we write the document it will search for element in whole JavaScript code
// But when we write that secific element it wll search within that
const ul = document.querySelector("ul");
const parainsideul = ul.querySelector(".para");
console.log(parainsideul);
