const btn1 = document.querySelector(".icon");
const btn2 = document.querySelector(".cross");
const sidebar = document.querySelector(".sidebar");

btn1.addEventListener("click", function () {
  sidebar.classList.toggle("showside");
});
btn2.addEventListener("click", function () {
  sidebar.classList.remove("showside");
});
