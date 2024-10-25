let hex = [
  "#3b8eac",
  "#7dadbf",
  "#14do48",
  "#a5edb9",
  "#a169dc",
  "#e35772",
  "#e49884",
];
let btn = document.getElementById("btn");
let color = document.getElementById("color");

btn.addEventListener("click", function () {
  const randomnumber = getrandomnumber();
  document.body.style.backgroundColor = hex[randomnumber];
  color.innerText = hex[randomnumber];
});

function getrandomnumber() {
  return Math.floor(Math.random() * hex.length);
}
