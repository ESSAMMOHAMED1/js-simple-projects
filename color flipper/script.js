//set variabels
let container = document.getElementById("continer");
let flipper = document.getElementById("coler");
let btn = document.getElementById("btn");
//set function 
const randomColor = () =>{
    //generat random color wiht math function 
    var random = Math.floor(Math.random()*16777215).toString(16);
    //add "#" to the random number to make it color
   flipper.style.backgroundColor = "#"+random;
}
//add event for flip color when we click
btn.addEventListener("click",randomColor);

