// Top Menu

var mainNav = document.getElementById("main-nav");
mainNav.addEventListener("mouseover", hoverHandler);
function hoverHandler(e) {
  var elem = e.target;
  while (!elem.classList.contains("main-sub-nav")) {
    elem = elem.parentNode;
    if (elem.nodeName == "BODY") {
      elem = null;
      return;
    }
  }
  elem.style.backgroundColor = "#ff781e";
  elem.style.color = "#fff";
  elem.parentNode.style.backgroundColor = "#ff781e";
}
mainNav.addEventListener("mouseout", hoverOutHandler);
function hoverOutHandler(e) {
  var elem = e.target;
  while (!elem.classList.contains("main-sub-nav")) {
    elem = elem.parentNode;
    if (elem.nodeName == "BODY") {
      elem = null;
      return;
    }
  }
  elem.style.backgroundColor = "#fff";
  elem.style.color = "#555";
  elem.parentNode.style.backgroundColor = "#fff";
}

//Media Submenu Make 2 row
function mediaSubmenuTwoRow() {
  var br = document.createElement("br");
  br.className = "breakBr";
  var mediaSelect = document.querySelector(".media-select");
  var breakPoint = document.querySelector(".break-point");
  if (window.matchMedia("(max-width: 576px)").matches) {
    mediaSelect.insertBefore(br, breakPoint);
  } else {
    if (document.querySelector(".breakBr")) {
      document.querySelector(".breakBr").remove();
      console.log(br);
    }
  }
}
mediaSubmenuTwoRow();

// Main Portfoilo Sorting
var cardDeckSort1 = document.getElementById("card-deck-3--sort1");
var cardDeckSort2 = document.getElementById("card-deck-3--sort2");
var cardDeckSort3 = document.getElementById("card-deck-3--sort3");

var sorting = document.querySelector(".sorting");
var sort1 = document.querySelector(".sort1");
var sort2 = document.querySelector(".sort2");
var sort3 = document.querySelector(".sort3");

// Sorting event Listener
sorting.addEventListener("click", function (e) {
  // If sort1 clicked
  if (e.target.classList.contains("sort1")) {
    cardDeckSort1.classList.remove("d-none");
    // Check the another sort contain d-none
    if (!cardDeckSort2.classList.contains("d-none")) {
      cardDeckSort2.classList.add("d-none");
    }
    if (!cardDeckSort3.classList.contains("d-none")) {
      cardDeckSort3.classList.add("d-none");
    }

    // Add sorting item active
    if (!sort1.classList.contains("sorting__item--active")) {
      sort1.classList.add("sorting__item--active");
    }
    // Ckeck other sorting item active
    if (sort2.classList.contains("sorting__item--active")) {
      sort2.classList.remove("sorting__item--active");
    }
    if (sort3.classList.contains("sorting__item--active")) {
      sort3.classList.remove("sorting__item--active");
    }
  }

  // If sort2 clicked
  if (e.target.classList.contains("sort2")) {
    cardDeckSort2.classList.remove("d-none");
    // Check the another sort contain d-none
    if (!cardDeckSort1.classList.contains("d-none")) {
      cardDeckSort1.classList.add("d-none");
    }
    if (!cardDeckSort3.classList.contains("d-none")) {
      cardDeckSort3.classList.add("d-none");
    }

    // Add sorting item active
    if (!sort2.classList.contains("sorting__item--active")) {
      sort2.classList.add("sorting__item--active");
    }
    // Ckeck other sorting item active
    if (sort1.classList.contains("sorting__item--active")) {
      sort1.classList.remove("sorting__item--active");
    }
    if (sort3.classList.contains("sorting__item--active")) {
      sort3.classList.remove("sorting__item--active");
    }
  }

  // If sort3 clicked
  if (e.target.classList.contains("sort3")) {
    cardDeckSort3.classList.remove("d-none");
    // Check the another sort contain d-none
    if (!cardDeckSort1.classList.contains("d-none")) {
      cardDeckSort1.classList.add("d-none");
    }
    if (!cardDeckSort2.classList.contains("d-none")) {
      cardDeckSort2.classList.add("d-none");
    }

    // Add sorting item active
    if (!sort3.classList.contains("sorting__item--active")) {
      sort3.classList.add("sorting__item--active");
    }
    // Ckeck other sorting item active
    if (sort1.classList.contains("sorting__item--active")) {
      sort1.classList.remove("sorting__item--active");
    }
    if (sort2.classList.contains("sorting__item--active")) {
      sort2.classList.remove("sorting__item--active");
    }
  }
});

// 위에있는 긴 코드가 아래 코드와 같은 기능 구현
// Media Tab
$(".media-select__item").click(function () {
  console.log("this");
  var activeTab = $(this).attr("data-tab");
  $(".media-select__item").removeClass("current");
  $(".tab-content").removeClass("current");
  $(this).addClass("current");
  $("#" + activeTab).addClass("current");
});
console.log("dd");

// Mobile nav
$(document).ready(function () {
  $(".mobile-menu__item").click(function () {
    $(this).find(".m-sub-menu").slideToggle("m-sub-menu--active");
    if ($(this).find(".mobile-menu__arrow").hasClass("fa-angle-down")) {
      $(this)
        .find(".mobile-menu__arrow")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
    } else {
      $(this)
        .find(".mobile-menu__arrow")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    }
  });
});

$(".m-hamberg").click(function () {
  console.log("gf");
  $(".mobile-menu").addClass("mobile-menu--active");
});

$(".mobile-menu__cancel").click(function () {
  console.log("gf");
  $(".mobile-menu").removeClass("mobile-menu--active");
});
