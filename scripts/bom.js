console.log(document);

console.log(`The page has a title of : ${document.title}`)

document.body.style.backgroundColor = "mediumseagreen";
document.body.style.padding = 100;

const nav = document.getElementById("nav");
nav.style.backgroundColor = "gray";
nav.style.width= 90;
nav.style.position= "fixed";
nav.style.top =65;

const btnBg = document.querySelector(".btnBg");

btnBg.onclick = changebG;

function changeBg(){
    const bG = prompt(`Enter the background color you want`);
    document.body.style.backgroundColor = bG;
}

const tint = document.querySelector(".tint");
tint.style.display = "none";

function changebG(){

    preventDefault();

    tint.style.display = "inline";
    
    document.body.style.backgroundColor = tint.value;
    
}