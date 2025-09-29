const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeIndex = 1;

nextBtn.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > circles.length) {
    activeIndex = circles.length;
  }

  updateUI();
});