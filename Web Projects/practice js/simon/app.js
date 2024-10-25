let gameSeq = [];
let userSeq = [];

let colors = ["red", "green", "skyblue", "purple"];

let btn = document.querySelectorAll(".btn");

let level = 1;
let started = false;

document.addEventListener("keypress", () => {
  if (started == false) {
    started = true;
  }

  let stage = document.getElementById("level");
  stage.innerText = `Level ${level}`;

  levelUp();
});

function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}
function userFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 200);
}

function levelUp() {
  let random = Math.floor(Math.random() * 3);
  let randomClr = colors[random];
  let randomClrBtn = document.querySelector(`.${randomClr}`);
  gameSeq.push(randomClr);
  console.log(gameSeq);

  btnFlash(randomClrBtn);
}

function clicked() {
  let btn = this;
  userFlash(btn);

  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  console.log(userSeq);
}

btn.forEach((btn) => {
  btn.addEventListener("click", clicked);
});
