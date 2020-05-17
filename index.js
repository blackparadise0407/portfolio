//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

//Change active status

//Scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 400
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 800
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 800
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 800
});

$("nav-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".discover").offset().top
    },
        'slow');
})