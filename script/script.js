let menuBtn = document.querySelector('.menu-btn');
let menu__btn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle('active');
   menu__btn.classList.toggle('active');
})