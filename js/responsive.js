let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navlogo = document.querySelector('.nav-logo');
let navcontent = document.querySelector('.nav-content');
let navsearch = document.querySelector('.nav-search');
burger.addEventListener('click', () => {
    // Check if the navbar is opening or closing
    if (navbar.classList.contains('navbar-burger')) {
        // Navbar is opening
        navbar.classList.toggle('navbar-burger');

        setTimeout(() => {
            navlogo.classList.toggle('responsive-burger');
            navcontent.classList.toggle('responsive-burger');
            navsearch.classList.toggle('responsive-burger');
        }, 300);  // Delay in milliseconds to match the transition
    } else {
        // Navbar is closing
        navlogo.classList.toggle('responsive-burger');
        navcontent.classList.toggle('responsive-burger');
        navsearch.classList.toggle('responsive-burger');
        navbar.classList.toggle('navbar-burger');
    }
});