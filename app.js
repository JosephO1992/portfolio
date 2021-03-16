const navBar = document.getElementById('navigation')
const burgerBtn = document.querySelector('.burger-menu-btn')
const mainNav = document.querySelector('.main-menu')
const heroText = document.querySelector('.hero-text')

burgerBtn.addEventListener("click", function() {
    if(mainNav.style.display === "none") {
        mainNav.style.display = "flex";
        burgerBtn.innerHTML = "close"
        heroText.style.display ="none"
    } else {
        mainNav.style.display = "none";
        burgerBtn.innerHTML = "menu"
        heroText.style.display = 'flex'
    }
});

console.log(burgerBtn)