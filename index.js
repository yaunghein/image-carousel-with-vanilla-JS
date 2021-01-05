const slides = document.querySelectorAll(".carousel-item");
const previousBtn = document.querySelector(".carousel-previous-btn");
const nextBtn = document.querySelector(".carousel-next-btn");
const dotNav = document.querySelector(".dots-nav");
const captions = document.querySelectorAll(".carousel-item p");
let currentPosition = 0;
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.setAttribute("data-index", i);
  dotNav.append(dot);
  dot.addEventListener("click", (event) => {
    hideAllSlides();
    currentPosition = Number(event.target.getAttribute("data-index"));
    updateSlide(currentPosition);
  });
}
const dots = document.querySelectorAll(".dot");
dots[currentPosition].classList.add("active");
captions[currentPosition].classList.add("active");
const hideAllSlides = () => {
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  for (caption of captions) {
    caption.classList.remove("active");
  }
};
const moveToPreviousSlide = () => {
  hideAllSlides();
  if (currentPosition === 0) {
    currentPosition = slides.length - 1;
  } else {
    currentPosition -= 1;
  }
  updateSlide(currentPosition);
};
const moveToNextSlide = () => {
  hideAllSlides();
  if (currentPosition === slides.length - 1) {
    currentPosition = 0;
  } else {
    currentPosition += 1;
  }
  updateSlide(currentPosition);
};
const updateSlide = (index) => {
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  captions[index].classList.add("active");
};
previousBtn.addEventListener("click", moveToPreviousSlide);
nextBtn.addEventListener("click", moveToNextSlide);
setInterval(moveToNextSlide, 3000);
