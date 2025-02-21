// Menu mobile
(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();

// Swiper myWorks

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

// active pages

$(document).ready(function () {
    var location = window.location.pathname; // Отримуємо поточний шлях (без домену)

    $('.menu a').each(function () {
        var link = $(this).attr('href'); // Отримуємо href кожного посилання

        // Якщо шлях збігається або сторінка головна ("/" або "index.html")
        if (location.endsWith(link) || (location === '/' && link === 'index.html')) {
            $(this).addClass('active'); // Додаємо клас "active"
        }
    });


});

// modal

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var openModal = document.getElementById("openModal");
    var closeModal = document.querySelector(".close");

    // Відкриття модального вікна за натисканням кнопки
    openModal.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Закриття при натисканні на "×"
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закриття при натисканні поза вікном
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});





