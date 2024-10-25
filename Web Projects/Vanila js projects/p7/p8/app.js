const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.97,
    img: "/p8/img/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 12.97,
    img: "/p8/img/item-2.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 15.97,
    img: "/p8/img/item-3.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 15.97,
    img: "/p8/img/item-4.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 15.97,
    img: "/p8/img/item-5.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 15.97,
    img: "/p8/img/item-6.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 7,
    title: "backon overflow",
    category: "breakfast",
    price: 15.97,
    img: "/p8/img/item-7.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 15.97,
    img: "/p8/img/item-8.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 9,
    title: "quarntain buddy",
    category: "shakes",
    price: 15.97,
    img: "/p8/img/item-9.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 10,
    title: "dinner",
    category: "dinner",
    price: 15.97,
    img: "/p8/img/item-10.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
];
const filterbtn = document.querySelector(".filter-btn");
const sectioncenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
  displaymenuitems(menu);
});

filterbtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displaymenuitems(menu);
    } else {
      displaymenuitems(menucategory);
    }
  });
});

function displaymenuitems(menuitems) {
  let displaymenu = menuitems.map(function (item) {
    return `<article class="menu-item">
                <img src=${item.img} alt=${item.title}>
                <div class="item-info">
                    <div class="header">
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </div>
                    <p>${item.desc}</p>
                </div>
            </article>`;
  });
  displaymenu = displaymenu.join("");
  sectioncenter.innerHTML = displaymenu;
}
