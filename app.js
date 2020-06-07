// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Gold",
    job: "Web Developer",
    img: (src = "../img/person1.jpg"),
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
  {
    id: 2,
    name: "Brad Bad",
    job: "Web Designer",
    img: (src = "../img/person2.jpg"),
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "CEO",
    img: (src = "../img/person3.jpg"),
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "Mark Twen",
    job: "Accaunting",
    img: (src = "../img/person4.jpg"),
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem modi, dolore hic minima id ipsam voluptates aut earum a tenetur nulla ipsa veniam ullam, eum officiis voluptatibus minus. Ipsam!",
  },
];

// Items
const img = document.getElementById("person-img");
const name = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting Item
let currentItem = 0;

// Get current Item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// Show Person
function showPerson() {
  const item = testimonials[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// Show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showPerson();
});

// Random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * testimonials.length);

  showPerson();
});
