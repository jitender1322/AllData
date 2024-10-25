const opan = document.querySelector(".btn1");
const clos = document.querySelector(".btn2");
const footer = document.querySelector(".zero");

opan.addEventListener("click", function () {
  if (footer.classList.contains("zero")) {
    footer.classList.remove("zero");
  } else {
    footer.classList.add("zero");
  }
});

clos.addEventListener("click", function () {
  footer.classList.add("zero");
});
