'use strict';

const btn = document.querySelector('#btn');

function myAnimation() {
  const car = document.querySelector('.car');
  let pos = 0;

  const timerId = setInterval(frame, 10);

  function frame() {
    if (pos === 700) {
      clearInterval(timerId);
    } else {
      pos++;
      car.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);

// setTimeOut is used for functions that are called once after specified delay;
// setInterval is used for functions that are called again and again
// clearInterval is used to stop setInterval



