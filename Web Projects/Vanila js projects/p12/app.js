const items = document.querySelectorAll(".deadline-format");
let futuredate = new Date(2022, 9, 17, 6, 20, 0);

const futuretime = futuredate.getTime();
function getremainingtime() {
  const today = new Date().getTime();
  const t = futuretime - today;

  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;

  let days = t / oneday;
  days = Math.floor(days);
  let hours = Math.floor((t % oneday) / onehour);
  let minutes = Math.floor((t % onehour) / oneminute);
  let seconds = Math.floor((t % oneminute) / 1000);

  const value = [days, hours, minutes, seconds];
  function format(item) {
    if (t < 0) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(value[index]);
  });
}
let countdown = setInterval(getremainingtime, 1000);
getremainingtime();
