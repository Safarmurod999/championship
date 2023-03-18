var swiper2 = new Swiper(".slide-content2", {
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
      nextEl: ".slide-container2 .swiper-button-next",
      prevEl: ".slide-container2 .swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 4,
        },
    },
  });

export default swiper2;
 