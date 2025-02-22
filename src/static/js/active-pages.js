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