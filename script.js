const create = document.querySelector(".create");
const container = document.querySelector("#container");

let num;
create.addEventListener('click', function(){
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

function createGrid(){

      let divSize = 960/num; 
        for(let i = 0; i < num * num; i++) {
           const div = document.createElement("div");
           div.style.height = divSize + "px";
           div.style.width = divSize + "px";
           div.classList.add("box");
           container.appendChild(div);
        };

    container.addEventListener('mouseover', function(event) {
         let currentDiv = event.target;
         onEntry(currentDiv);
      });

     function onEntry(element){
        element.style.background = "pink";
     };
};

function removeGrid() {
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
};
