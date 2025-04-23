let name = document.getElementById("name");
let subject = document.getElementById("subject");
let age = document.getElementById("age");
let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
  let obj = {
    id: Date.now() ,
    name : name.value,
    subject : subject.value,
    age : age.value
  }
  let oldRecord = JSON.parse(localStorage.getItem("Students"))  || []
  localStorage.setItem("Students",JSON.stringify([...oldRecord,obj]));

  name.value = ""
  subject.value = ""
  age.value = ""
})