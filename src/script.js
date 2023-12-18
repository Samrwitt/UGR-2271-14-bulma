document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById(burger.dataset.target);

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("readmore-button")) {
    var card = e.target.closest(".card-content");
    var moreText = card.querySelector(".more-text");
    moreText.classList.toggle("is-hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".testimonial-container");

  const cards = document.querySelectorAll(".testimonial-card");

  
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentIndex = 0;

  
  const showCard = (index) => {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
    });
  };

  
  showCard(currentIndex);

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".is-overflow-auto");
  const cards = document.querySelectorAll(".carousel__slide");

  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentIndex = 0;
  const showCard = (index) => {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
    });
  };

  showCard(currentIndex);

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".is-overflow-auto");
  const cards = document.querySelectorAll(".about__card");

  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentIndex = 0;

  const showCard = (index) => {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
    });
  };

  showCard(currentIndex);

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });
});
