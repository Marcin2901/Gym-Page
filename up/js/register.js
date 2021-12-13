// first page
const slidePage = document.querySelector('.register__content--form__page');
const nextBtn1 = document.querySelector('.next-1');

// second page
const prevBtn1 = document.querySelector('.prev-1');
const nextBtn2 = document.querySelector('.next-2');

// third page
const prevBtn2 = document.querySelector('.prev-2');
const nextBtn3 = document.querySelector('.next-3');

// forth page
const prevBtn3 = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');


// progres stem
const progresStep = document.getElementsByClassName('register__progres--step');

// form
const registerForm = document.querySelector('.register__content--form');

let max = 3;
let current = 0;

function addTickMark() {
    let progresItems = progresStep[current].children
    progresStep[current].style.background = "#fff";
    for(let item of progresItems) {
        item.classList.add('active');
    }
    current++;
}

function removeTickMark() {
    current--;
    let progresItems = progresStep[current].children
    progresStep[current].style.background = "rgba(38, 52, 65, 0.65)";
    for(let item of progresItems) {
        item.classList.remove('active')
    }
}

nextBtn1.addEventListener('click', (e) => {
    e.preventDefault();   
    registerForm.style.transform = "translateX(-25%)";
    addTickMark();
})

nextBtn2.addEventListener('click', (e) => {
    e.preventDefault();   
    registerForm.style.transform = "translateX(-50%)";
    addTickMark();
})

nextBtn3.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.transform = "translateX(-75%)";
    addTickMark();
})

prevBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.transform = "translateX(0)";
    removeTickMark();
})

prevBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.transform = "translateX(-25%)";
    removeTickMark();
})

prevBtn3.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.transform = "translateX(-50%)";
    removeTickMark();
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTickMark();
    setTimeout(() => {
        alert('Your Form Has Been Successfuly Submited!');
        location.reload();
    }, 1000)

})