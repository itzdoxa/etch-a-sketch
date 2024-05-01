const createBtn = document.querySelector(".create");
const menu = document.querySelector("#menu");
const container = document.createElement("div");
const eraser = document.querySelector(".eraser")
const random = document.querySelector(".random-color");
const colorPicker = document.querySelector("#color-picker");
const canvasColor = document.querySelector("#canvas-color");
const black = document.querySelector(".black");

container.classList.add("container");
menu.appendChild(container);

let num;
createBtn.addEventListener('click', function(){
   num = prompt("number of squares per side");
      if(num > 100) {
        return alert("input should be less than 100");
       }      
      else {
          removeGrid();
          createGrid();
       }
});

let div;
function createGrid(){
  let divSize = 700/num; 
    for(let i = 0; i < num * num; i++) {
       div = document.createElement("div");
       div.style.height = divSize + "px";
       div.style.width = divSize + "px";
       div.classList.add("box");
       container.appendChild(div);
    };     
};

function removeGrid() {
 while (container.firstChild) {
     container.removeChild(container.firstChild);
 }
};

let currentDiv;
let rgbValue;
let colorMode = "default";
container.addEventListener('mouseover', function(event) {
   if(container.firstChild) {
      currentDiv = event.target;
   //   if (!container.contains(currentDiv)) return;

          if(colorMode == "default") {
               currentDiv.style.background = "black";
          }
          else if(colorMode == "random"){
               currentDiv.style.background = randomColor();
          }
          else if(colorMode == "erase"){
               currentDiv.style.background = "";
          }
          else if(colorMode == "colorPicker"){
               currentDiv.style.background = colorPicker.value;
          };
    };      
 });

function randomColor(){
   let red = Math.ceil(Math.random()*255);
   let green = Math.ceil(Math.random()*255);
   let blue = Math.ceil(Math.random()*255);
   return rgbValue = `rgb(${red}, ${green}, ${blue})`;
};

canvasColor.addEventListener('input', function(){
      container.style.backgroundColor = canvasColor.value;
});

eraser.addEventListener('click', function(){
        colorMode = "erase";
 });
random.addEventListener('click', function(){
        colorMode = "random";
 });
black.addEventListener('click', function(){
        colorMode = "default";
});
colorPicker.addEventListener('input', function(){
        colorMode = "colorPicker";
})
    
