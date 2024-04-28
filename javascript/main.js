document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');

    menu.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !menu.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
    menu.addEventListener('click', function (event) {
        event.preventDefault();
    });
});


