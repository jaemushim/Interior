// Bar Swiper
var swiper = new Swiper(".look-book__swiper", {
  slidesPerView: 8,
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper Media
var swiper = new Swiper(".swiper-media", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("load", swiperResponsive);
function swiperResponsive() {
  var mq = window.matchMedia("(max-width: 576px)");
  if (mq.matches) {
    // window width is at less than 570px
    swiper = new Swiper(".look-book__swiper", {
      slidesPerView: 3,
    });
  } else {
    // window width is greater than 570px
    swiper = new Swiper(".look-book__swiper", {
      slidesPerView: 10,
    });
  }

  var mq = window.matchMedia("(min-width:576px) and (max-width: 1060px)");
  if (mq.matches) {
    // window width is at less than 570px
    swiper = new Swiper(".look-book__swiper", {
      slidesPerView: 5,
    });
  } else {
    // window width is greater than 570px
  }
}
