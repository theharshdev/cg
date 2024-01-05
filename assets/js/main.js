const menu = document.getElementById("menu");
const imageBoxes = document.querySelectorAll(".imageBox");
const movableImgs = document.querySelectorAll(".movableImg");
const viewBox = document.getElementById("viewBox");
const viewBoxContainer = document.getElementById("viewBoxContainer");
const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("click", (event) => {
  const target = event.target;
  // Toggling menu ----
  if (
    target.classList.contains("openMenu") ||
    target.classList.contains("menu")
  ) {
    menu.classList.remove("translate-x-full");
  } else {
    menu.classList.add("translate-x-full");
  }
  // Toggling image popup bix ------
  if (
    target.classList.contains("imageBox") ||
    target.classList.contains("viewBox")
  ) {
    viewBoxContainer.style.display = "flex";
  } else {
    viewBoxContainer.style.display = "none";
  }
});

imageBoxes.forEach((imageBox) => {
  imageBox.addEventListener("click", () => {
    const imageURL = window
      .getComputedStyle(imageBox)
      .getPropertyValue("background-image")
      .replaceAll('url("', "")
      .replaceAll('")', "");
    viewBox.innerHTML = `<img src="${imageURL}" class="w-full viewBox" />`;
    viewBoxContainer.style.display = "flex";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    toTopBtn.classList.add("flex");
    toTopBtn.classList.remove("hidden");
  } else {
    toTopBtn.classList.remove("flex");
    toTopBtn.classList.add("hidden");
  }
});

toTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("mousemove", (event) => {
  movableImgs.forEach((movableImg) => {
    const x = event.clientX;
    movableImg.style.left = `${x}px`;
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
  },
});

const owlPrevs = document.querySelectorAll(".owl-prev");
const owlNexts = document.querySelectorAll(".owl-next");

window.addEventListener("load", () => {
  owlNexts.forEach((owlNext) => {
    owlNext.innerHTML = `<i class="bi bi-arrow-right text-orange-500 text-3xl leading-3"></i>`;
  });
  owlPrevs.forEach((owlPrev) => {
    owlPrev.innerHTML = `<i class="bi bi-arrow-left text-orange-500 text-3xl leading-3"></i>`;
  });
});
