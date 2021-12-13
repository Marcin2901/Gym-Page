const scrollBtn = document.querySelector('.scroll');


window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500);
});


function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollBtn.addEventListener('click', scrollTop)