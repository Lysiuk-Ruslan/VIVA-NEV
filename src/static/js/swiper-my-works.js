let swiper = new Swiper('.swiper', {
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    // slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        },
    },

    pagination: {
        el: '.swiper-pagination',

        clickable: true,

        dynamicBullets: true,
    },


});