"use strict";

const backToTopBtn = document.getElementById("backToTopBtn");
const elements = document.querySelectorAll('.fade-in-up');

function handleScroll() {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function fadeInUpElements() {
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }
  });
}

window.addEventListener("scroll", () => {
  handleScroll();
  fadeInUpElements();
});

backToTopBtn.addEventListener("click", () => {
  scrollToTop();
});

fadeInUpElements();
