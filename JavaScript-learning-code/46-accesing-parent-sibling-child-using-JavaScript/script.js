// copy the js path of elements

const firstlink = document.querySelector(
  "body > p:nth-child(5) > a:nth-child(3)"
);

//How to access parents
const parantElements_ =
  firstlink.parentElement.parentElement.parentElement.parentNode;
console.log(parantElements_);

// childern
const children = firstlink.parentElement.children;
console.log(children);

const children_ = firstlink.parentElement.parentElement.childNodes;
console.log(children_);

// sibling

const siblingElement = firstlink.nextElementSibling;
console.log(siblingElement);

const sibling_element = firstlink.previousElementSibling;
console.log(sibling_element);

const sibling = firstlink.nextSibling;
console.log(sibling);
