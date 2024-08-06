// changing the styles with JavaScript
// const heading = (document.querySelector("h2").style.color = "green");
const heading = document.querySelector("h2");
console.log(heading);

// shortcut
heading.style.color = "hotpink";
heading.style.backgroundColor = "blue";

// select all anchor tags and change the color into red and text decoration none

const allLinks = document.querySelectorAll("a");

//1st way traditonal way
// allLinks[0].style.color = "red";
// allLinks[1].style.color = "red";
// allLinks[2].style.color = "red";
// allLinks[3].style.color = "red";

// 2nd way using for loop

// for (let i = 0; i < allLinks.length; i++) {
//   allLinks[i].style.color = "red";
//   allLinks[i].style.textDecoration = "none";
//   allLinks[i].style.fontWeight = "700";
//   allLinks[i].style.fontFamily = "cursive";
// }

// 3rd for of loop

for (let links of allLinks) {
  // one way in loop
  // links.style.color = "red";
  // links.style.textDecoration = "none";
  // links.style.fontWeight = "700";
  // links.style.fontFamily = "cursive";
  //----------------------------------------------
  // second way in loop
  // links.style.cssText = `
  // color: red;
  // text-decoration-line : none;
  // font-weight : 700;
  // font-family : cursive;`;
  //-----------------------------------------------
  // we can set class name by className or setAttribute
  // links.className = "green-link";
  // links.setAttribute("class", "green-link");

  //---------------------------------------------
  console.log(links.classList);

  // links.classList.add("pink-link");
  links.classList.remove("pink-list");
  links.classList.toggle("pink-list"); // if added then remove and if removed add
}
