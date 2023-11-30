let slides = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".dot");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}
