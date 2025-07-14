let heading = document.getElementById("heading")

let value1 = 0
let value2 = 0


function calc(a){
    console.log(typeof(heading.innerText));
    
    heading.style.backgroundColor = a
}


window.addEventListener("scroll",()=>{
   if(window.scrollY>1000){
    document.getElementById("body").style.backgroundColor = "red";
   }
})