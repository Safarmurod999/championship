var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 31,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    navigation: {
      nextEl: ".slide-container .swiper-button-next",
      prevEl: ".slide-container .swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
  });

export default swiper;