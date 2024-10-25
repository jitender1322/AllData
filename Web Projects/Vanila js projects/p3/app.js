const review = [
  {
    id: 1,
    name: "john sligma",
    job: "web developer",
    img: "/p3/img/e1.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "ui desiner",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    name: "emmy",
    job: "ux desiner",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aspernatur illo earum veroLorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aspernatur illo earum.",
  },
  {
    id: 4,
    name: "nancy desuja",
    job: "backend developer",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aspernatur illo earum veroLorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aspernatur illo earum",
  },
];

const author = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prv = document.getElementById("prv");
const next = document.getElementById("next");
const random = document.getElementById("random");

let current_Item = 0;

window.addEventListener("DOMContentLoaded", function () {
  showperson(current_Item);
});
function showperson(person) {
  const item = review[person];
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prv.addEventListener("click", function () {
  current_Item--;
  if (current_Item < 0) {
    current_Item = review.length - 1;
  }
  showperson(current_Item);
});

next.addEventListener("click", function () {
  current_Item++;
  if (current_Item > review.length - 1) {
    current_Item = 0;
  }
  showperson(current_Item);
});

random.addEventListener("click", function () {
  current_Item = Math.floor(Math.random() * review.length);
  showperson(current_Item);
});
