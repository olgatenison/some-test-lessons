const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');


let index = 0;

const activeSlide = n => {
 for(let slide of slides) {
    slide.classList.remove('active');
 }
 slides[n].classList.add('active');
}

const activeDot = n => {
    for(let dot of dots) {
       dot.classList.remove('active');
    }
    dots[n].classList.add('active');
   }
   
const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}
const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0;
        prepareCurrentSlide(index);
        
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length -1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) =>{
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/