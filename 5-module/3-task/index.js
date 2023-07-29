function initCarousel() {
  const inner = document.querySelector(".carousel__inner"),
    arrowLeft = document.querySelector(".carousel__arrow_left"),
    arrowRight = document.querySelector(".carousel__arrow_right");

  let shift = 0,
    i = 0;
  arrowLeft.style.display = "none";

  arrowLeft.addEventListener("click", function () {
    shift += inner.offsetWidth;
    arrowRight.style.display = "";
    i--;

    if (i == 0) {
      this.style.display = "none";
    }

    inner.style.transform = `translateX(${shift}px)`;
  });

  arrowRight.addEventListener("click", function () {
    shift -= inner.offsetWidth;
    arrowLeft.style.display = "";
    i++;

    if (i == 3) {
      this.style.display = "none";
    }

    inner.style.transform = `translateX(${shift}px)`;
  });
}
