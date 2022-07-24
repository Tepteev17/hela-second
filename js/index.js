const headerburger = document.querySelector('.header-burger')
const header = document.querySelector('.header')
const headerMenu = document.querySelector('.header-menu')
const closeList = document.querySelector('.cross')
const background = document.querySelector('.background')

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable:true
      },
      effect: 'fade',
      autoplay: {
        delay: 5000,
      },
});

document.addEventListener('click', (e)=>{
    if(e.target == headerburger){
        headerMenu.classList.toggle('active')
        background.classList.toggle('active')
        header.classList.toggle('active')
    } 
    if(e.target == closeList){
        headerMenu.classList.remove('active')
        background.classList.remove('active')
        header.classList.remove('active')
    }
})
