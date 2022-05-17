'use strict';

/*
  * slider with opacity
  * for testimonial
  */

let currentSlideIndex = 0;

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
console.log('dots : ', dots );
console.log('slider: ', slider);
console.log('slides: ', slides);

const prevSlideButton = document.querySelector('.slider__arrow_left');
const nextSlideButton = document.querySelector('.slider__arrow_right');
console.log('prevSlideButton: ', prevSlideButton);
console.log('nextSlideButton: ', nextSlideButton);


// todo show slider func
const changeSlide = (slideIndex) => {

  slides.forEach( (slide, index) => {
      
      slide.classList.remove('slide__item_active');
      slide.classList.add('visually-hidden');
      console.log('slide: ', slide);
      
      if ( index === slideIndex ) {
        slides[index].classList.remove('visually-hidden');
        slides[index].classList.add('slider__item_active');
        console.log('slides[index]: ', slides[index]);
      }
  });

  console.log(slideIndex);
}


//todo make click dot active
//todo change current index
const getItActiveIndexDot = (target) => {
  //make current dot active

  if (target.classList.contains('slider__dot_active')) {
    //this is already active dot
    console.log('this is active dot ');
    return false;

  } else {
    //if this unactive dot

    //at first make all dots unactive
    dots.forEach( (elem, index) => {
      if ( elem === target ) {{
        currentSlideIndex = index;
        // console.log('make new Slide Index at: ', currentSlideIndex);
      }} else {
        elem.classList.remove('slider__dot_active');
        // console.log('index: ', index);
      }
    })

    //then if target dot isnot active - make it active
    target.classList.add('slider__dot_active');
    return currentSlideIndex;
  }
}

//вешаем слушатели на точки
dots.forEach((dot) => {
  dot.addEventListener('click', (event) => {
    const target = event.target;
    console.log('active index will be', getItActiveIndexDot(target));
    changeSlide(currentSlideIndex);
  })
})


