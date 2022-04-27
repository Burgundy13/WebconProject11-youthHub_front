const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mainMenu = document.querySelector('.main-menu');
const menuItems = document.querySelector('.main-menu ul li');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    closeIcon.classList.add('active');
    mainMenu.classList.add('active');
})

closeIcon.addEventListener('click', () => {
    closeIcon.classList.remove('active');
    menuIcon.classList.add('active');
    mainMenu.classList.remove('active')
})