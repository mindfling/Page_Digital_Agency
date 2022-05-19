'use strict';

/*
  * slider with opacity by css
  * for testimonial
  */
 
const slider = document.querySelector('.slider');

const slides = slider.querySelectorAll('.slider__item');
let dotsList; // = slider.querySelector('.slider__dots');
let dots; // = slider.querySelectorAll('.slider__dot');

const prevSlideButton = slider.querySelector('.slider__arrow_left');
const nextSlideButton = slider.querySelector('.slider__arrow_right');

let currentSlideIndex = 0;
let slidesAmount = slides.length;


const init  = () => {
  //count number of slides
  //считаем количество слайдов
  slidesAmount = slides.length;

  // <!-- <div class="slider__dots"> -->
  dotsList = document.createElement('div');
  dotsList.classList.add('slider__dots');
  slider.append(dotsList);

  //создаем нужное количество точек динамически
  // <!-- <button class="slider__dot"></button> -->
  for (let i = 0; i < slidesAmount; i++) {
    const newDot = document.createElement('button');
    newDot.classList.add('slider__dot');
    dotsList.append(newDot);
  }

  dots = slider.querySelectorAll('.slider__dot');

  //set slide index to 0 by default
  //по умолчанию видим только 1й слайд
  currentSlideIndex = 0;

  
  //скрываем все слайды все делаем неактивными
  // slides.forEach( (slide) => {
  //   slide.classList.remove('slide__item_active');
  // });

  //все точки делаем неактивными
  // dots.forEach( (dot) => {
  //   dot.classList.remove('slider__dot_active');
  // })

  changeSlide();

  return ;
}

const nextSlide = () => {
  // вызывается при клике на nextButton
  // * 0, 1, 2
  // * 3-1
  if (currentSlideIndex < slidesAmount - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }

  changeSlide();
}

const prevSlide = () => {
  // вызывается при клике на prevButton
  // * 0, 1, 2
  // * 0
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = slidesAmount - 1; // * 2
  }

  changeSlide();
  return currentSlideIndex;
}



// todo show slider func
const changeSlide = () => {

  slides.forEach( (slide, index) => {
    if ( index === currentSlideIndex ) {
      //устанавливаем класс active у нужного слайдера
      slides[index].classList.add('slider__item_active');
      //и у нужной точки
      dots[index].classList.add('slider__dot_active');
    } else {
      slide.classList.remove('slider__item_active');
      dots[index].classList.remove('slider__dot_active');
    }
  });
  console.log('current slide ', currentSlideIndex);
}


//todo make click dot active
//todo change current index
/*
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
*/

//инициируем в начале
init();


//вешаем слушатели на точки
dots.forEach((dot) => {
  dot.addEventListener('click', (event) => {
    const target = event.target;
    
    //проверяем по какой точке клик
    dots.forEach( (dot, index) => {
      if ( dot === target) {
        //устанавливаем нужный индекс
        currentSlideIndex = index;
      }
    });
    changeSlide();
  })
})

//вешаем клики по кнопкам
prevSlideButton.addEventListener('click', event => {
  event.preventDefault();
  prevSlide();
});

nextSlideButton.addEventListener('click', event => {
  event.preventDefault();
  nextSlide();
});

