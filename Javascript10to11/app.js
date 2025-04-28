let name = document.getElementById("name");
let subject = document.getElementById("subject");
let age = document.getElementById("age");
let btn = document.getElementById("btn");
let list = document.getElementById("list");




btn.addEventListener("click", () => {
  let obj = {
    id: Date.now(),
    name: name.value,
    subject: subject.value,
    age: age.value,
  };
  let oldRecord = JSON.parse(localStorage.getItem("Students")) || [];
  localStorage.setItem("Students", JSON.stringify([...oldRecord, obj]));

  name.value = "";
  subject.value = "";
  age.value = "";

  getData()
});

function getData(){
  let allData = JSON.parse(localStorage.getItem("Students"));
  list.innerHTML = ""
  
  allData.forEach((item) => {
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let img = document.createElement("img");

    li1.innerText = item.id
    li2.innerText = item.name
    li3.innerText = item.subject
    li4.innerText = item.age

    list.append(li1)
    list.append(li2)
    list.append(li3)
    list.append(li4)
  });

}

getData()

