const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    centeredSlides: true,
  });
}

swiperAnimation();
page4Animation();

var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
menu.addEventListener("click", function () {
  full.style.top = 0;
});

var loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 3500);
