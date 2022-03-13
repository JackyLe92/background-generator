/*
Node properties: type, tag and contents
*/

// let getFirstCell = document.querySelector("table");
// getFirstCell.rows[0].cells[0].innerHTML = "template";

// console.log(getFirstCell.rows[0].cells[0].textContent);

// getFirstCell.rows[3].cells[4].innerHTML = "this is the final template";
// getFirstCell.rows[3].cells[4].classList.add("blue");

// // alert(getFirstCell.rows[0].outerHTML);

// let firstLi = document.querySelector("ul").firstElementChild;
// let secondLi = firstLi.nextElementSibling;
// let thirdLi = secondLi.nextElementSibling;
// firstLi.innerHTML = " Replace to <em>this</em> pos "; // replace as the HTML tag
// secondLi.textContent = " Replace to <b>this</b> pos "; // replace as the text not html
// thirdLi.outerHTML = "<button> HOME</button>"; // replace all the element by other element

// console.log("3rd", thirdLi);

// console.log("1st", firstLi);
// access the text node
// let textNode = document.body.firstChild;
// let comment = textNode.nextSibling;

// console.log("Found out here", textNode);
// console.log("Found the comment", comment);

// console.log("data of the text node: ", textNode.data);
// console.log("text of comment: ", comment.data);

// let elemH = document.querySelector("#elemHidden");
// // elemH.hidden = true; // == display: none; in css
// setInterval(() => (elemH.hidden = !elemH.hidden), 1000);

// let inputNe = document.querySelector(".inputNe");
// console.log(inputNe.id);

// add properties for DOM object
/*
document.body.myData = {
  name: "Caesar",
  title: "Imperator",
};
alert(document.body.myData.title);

// add method for DOM object
document.body.sayTagName = function () {
  alert(this.tagName);
};

document.body.sayTagName();
Element.prototype.sayHi = function () {
  alert(`Hello, I'm ${this.tagName}`);
};
*/
