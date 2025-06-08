const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close when the close button is clicked
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");

});

// Close when the close button is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuCloseButton.click());
})


// This first line ensures that the code runs only after entire HTML has loaded.
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Responsive breakpoints
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    }
  });
});
