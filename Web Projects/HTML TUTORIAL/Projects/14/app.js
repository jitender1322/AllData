const count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrese")) {
      count--;
    } else if (styles.contains("increse")) {
      count++;
    } else {
      count = 0;
    }
  });
});
value.textContent = count;
