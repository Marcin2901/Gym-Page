const SliderSlides = document.getElementsByClassName('testimonials__content--slider__slide');
const indicatorImages = document.getElementsByClassName('testimonials__content--indicator__img');


function deactivateActive() {
    for(let img of indicatorImages) {
       img.classList.remove('active');
    }
    for(let slide of SliderSlides) {
        slide.classList.remove('active');
    }
}

for(let img of indicatorImages) {
    img.addEventListener('click', () => {
        deactivateActive()
        img.classList.add('active')

        let imgId = img.getAttribute('data-id')
        SliderSlides[imgId].classList.add('active')
    })
}



