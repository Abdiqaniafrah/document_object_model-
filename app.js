console.log("I am being printed by the JavaScript file!");
// querySelector - identify particular elements
const h1 = document.querySelector("h1");

h1.innerText = "It's Monday";
h1.style.color = "blue";

const div = document.querySelector("#demo-div");

// creating an empty p tag using JS
const p1 = document.createElement("p");
// specify what goes indie the element you've created
p1.innerText = "I am the first paragraph";


const p2 = document.createElement("p")
p2.innerText = "I am second";

const p3 = document.createElement("p")
p3.innerText = "I am Third";


// appendChild = modify node tree and adding the p1 to div tag
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

const paragraph = document.querySelectorAll("p")
console.log(paragraph);

const makeTextRed = function(){
// must loop though because of querySelectorAll element 
for (let i = 0; i < paragraph.length; i++){
    paragraph[i].classList.add("red-text");
    }
}

const textChanger = document.querySelector("#text-changer");
textChanger.addEventListener("click,", makeTextRed);