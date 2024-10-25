const colors = ["red", "orange", "black", "green", "pink", "brown"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", () => {
  const randomnumber = getrandomnumber();
  document.body.style.backgroundColor = colors[randomnumber];
  color.innerText = colors[randomnumber];
});

function getrandomnumber() {
  return Math.floor(Math.random() * colors.length);
}
