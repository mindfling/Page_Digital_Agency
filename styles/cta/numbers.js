'use strict';

/* *count number from 0 to numb* */

// const customers = document.querySelector('.cta__number_customers');
// const projects = document.querySelector('.cta__number_projects');
// const awards = document.querySelector('.cta__number_awards');


function counter(strClass) {
  // * simple counter from 0 to number  
  const target = document.querySelector(strClass);
  const initialNumb = +parseInt(target.textContent);
  let count = 0;
  
  const timerID = setInterval(() => {
    if (count < initialNumb) {
      target.textContent = ++count;
      console.log(count);
    }
    if (count >= initialNumb) {
      clearInterval(timerID);
      target.innerHTML += ' &plus;'; //добавить знак "+" в конце
      console.log('stop');
    }
  }, 50); //ms

};


// todo сделать более интересный counter по цифрам ))) 123^
// todo сделать запуск счетчика на прокрутку и например на ховер

counter('.cta__number_customers');
counter('.cta__number_projects');
counter('.cta__number_awards');