const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((button) => {
  button.addEventListener("click", function (a) {
    const styles = a.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
