document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("container");
container.style.border = "1px solid"

for(let i = 1; i <= 16; i ++){
    let box = document.createElement("div");
    box.classList.add("colorbox");
    box.style.border = "1px solid";
    box.textContent = `${i}`;
    container.appendChild(box);
}






})

