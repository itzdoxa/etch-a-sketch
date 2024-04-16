
const container = document.querySelector("#container");
function createDivs(){
    let num = prompt();
    let size = 960/num;
    for(let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.style.height = size + "px";
    div.style.width = size + "px";
    div.classList.add("box");
    container.appendChild(div);
    }
 };
 createDivs();

 let currentDiv = null;

 container.addEventListener('mouseover', function(event) {
     if (currentDiv) return;
     let target = event.target;
     if (!target) return;
     if (!container.contains(target)) return;
     onEntery(target);
 });

 function onEntery(element){
  element.style.background = "pink";
 };
