//get date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
//close links
const navtoggle = document.querySelector(".nav-toggle");
const linkcontainer = document.querySelector(".links-container");
const showlinks = document.querySelector(".show-links");

navtoggle.addEventListener("click", function () {
  if (linkcontainer.classList.contains("show-links")) {
    linkcontainer.classList.remove("show-links");
  } else {
    linkcontainer.classList.add("show-links");
  }
});
