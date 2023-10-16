let btn = document.getElementById("click")
let div1 =document.getElementById("name")
// let btnSet = document.querySelector('#btnSet');
function myFunction() {
    div1.style.backgroundColor= "red"; 
    /* h1color.setAttribute("style", "color:red;"); */
}
btn.addEventListener("click",myFunction)
setTimeout(btn,11000);