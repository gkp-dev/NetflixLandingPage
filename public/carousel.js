function rightClick(swiper, rightBtn) {
    const carousel = document.querySelector(swiper);
    const right = document.querySelector(rightBtn);
    carousel.scrollLeft += carousel.offsetWidth;

}

function leftClick(swiper, leftBtn) {
    const carousel = document.querySelector(swiper);
    const left = document.querySelector(leftBtn);
    carousel.scrollLeft -= carousel.offsetWidth;

}

function changebackground() {

    const entireNav = document.querySelector('.container-navbar')

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            entireNav.style.background = 'black'
        } else {
            entireNav.style.background = 'transparent'
        }

    })


}
changebackground()