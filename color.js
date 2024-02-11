const btnEL = document.querySelector(".btn");
const bodyEL = document.querySelector("body");


var colors = ["Brown","Purple", "green", "blue", "red", "orange", "yellow", "violet"];


bodyEL.style.background = "pink";

btnEL.addEventListener("click",addColor);

function addColor(){
    console.log("clicked");
    var color = parseInt(Math.random()*colors.length);
    bodyEL.style.background = colors[color]; 
    count++;
}