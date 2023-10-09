// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 30,
//     },
//   },
// });
// pop-up
function openPopup(cardNumber) {
  document.getElementById("popup" + cardNumber).style.display = "block";
}

function closePopup(cardNumber) {
  document.getElementById("popup" + cardNumber).style.display = "none";
}
//pop-up for imgs
function openData(id) {
  document.getElementById("dataOfEmp" + id).style.display = "block";
}

function closeData(id) {
  document.getElementById("dataOfEmp" + id).style.display = "none";
}

$(document).ready(function () {
  $(".flip").click(function () {
    $(this).next(".panel").slideToggle("slow");
  });
});

$(document).ready(function () {
  $(".banner-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    autoplay: true,
    autoplaySpeed: 500,
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector(".list ul");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  menu.style.transition = "1s ease;";
});

// $('.menu-toggle').click(()=>{
//   $('.list').toggleClass('navTogl');
// })
