document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("container");
container.style.border = "1px solid"
const defaultSize = 16;
const bttn = document.getElementById("change-size");
const reset = document.getElementById('reset');

function generateBox(size,boxSize){

    for(let i = 1; i <= size*size; i++){
        let box = document.createElement("div");
        box.classList.add("colorbox");
        box.style.border = "1px solid lightgray";
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        container.appendChild(box);
    }
}

generateBox(defaultSize,603/defaultSize);

bttn.addEventListener('click',()=>{
    let size = document.getElementById("size-value").value;
    if(size > 100){
        alert("Size has to be between 16 and 100");
    }else{
    let boxSize = 603 / size;
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    generateBox(size,boxSize);
    }
})

let hoverBoxes = document.querySelectorAll(".colorbox");
let slider = document.getElementById("myRange");

document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("colorbox")) {
        event.target.style.backgroundColor = "black";   
        event.target.style.opacity = slider.value / 100;
    }
});

reset.addEventListener('click',()=>{
    let size = document.getElementById("size-value").value;
    if(size > 100){
        alert("Size has to be between 16 and 100");
    }else{
    let boxSize = 603 / size;
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    generateBox(size,boxSize);
    }
})



})

