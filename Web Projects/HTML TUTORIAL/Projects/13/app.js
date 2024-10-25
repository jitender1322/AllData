const colors = [
  "red",
  "blue",
  "brown",
  "pink",
  "orange",
  "aqua",
  "green",
  "yellow",
  "orange",
  "black",
];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const random = randomnumber();
  console.log(random);
  document.body.style.background = colors[random];
  color.textContent = colors[random];
});
function randomnumber() {
  return Math.floor(Math.random() * colors.length);
}
