document.addEventListener('DOMContentLoaded', function () {
    const HEADER = document.querySelector('.header');
    const BURGER = HEADER.querySelector('.header__burger');

    BURGER.addEventListener('click', function () {
        HEADER.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});