const createBtn = document.querySelector(".create");
var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let num;
createBtn.addEventListener('click', function(){
     num = prompt("number of squares per side");
         if(num > 100) {
             alert("input should be less than 100");
             return;
         }      
         else {
             removeGrid();
             createGrid();
         }
});

let currentDiv;
container.addEventListener('mouseover', function(event) {
   if(container.firstChild) {
       currentDiv = event.target;
      // fix: once a div has gotten a color, dont let it change 
      // set a default color 
      // let user select a color
      colorThis(currentDiv); 
  }
});

function createGrid(){
   let divSize = 960/num; 
     for(let i = 0; i < num * num; i++) {
        let div = document.createElement("div");
        div.style.height = divSize + "px";
        div.style.width = divSize + "px";
        div.style.outline = "0.1px solid black";
        div.classList.add("box");
        container.appendChild(div);
     };   
};

function removeGrid() {
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
};

function randomColor(){ 
       let red = Math.ceil(Math.random()*255);
       let green = Math.ceil(Math.random()*255);
       let blue = Math.ceil(Math.random()*255);
       return rgbValue = `rgb(${red}, ${green}, ${blue})`;
};

function colorThis(element){
   element.style.background = randomColor();
 };

