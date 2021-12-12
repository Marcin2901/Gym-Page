const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('header__overlay');

menu.addEventListener('click', () => {
    header.classList.toggle('open');
})



const themeBtn = document.getElementById('toggle');
const html = document.documentElement;

themeBtn.addEventListener('click', () => {
    smoothTrans();
    if(themeBtn.checked) {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
    }
})

let smoothTrans = () => {
    html.classList.add('transition');
    window.setTimeout(() => {
        html.classList.remove('transition');
    }, 1000);
}