const hamburger = document.querySelector('.fa-bars');
const head = document.querySelector('.head');

hamburger.addEventListener('click',() => {
    head.classList.add('mobile-head');
})
hamburger.addEventListener('dblclick',() => {
    head.classList.remove('mobile-head');
})


