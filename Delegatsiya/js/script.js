const btnMain = document.getElementById("btn-main");

btnMain.addEventListener('click', (event) => {
  // console.dir(event.target);

  if (event.target && event.target.tagName == 'BUTTON') {
    if (event.target.classList.contains('blue')) {
      console.log("Blue btn is clicked");
    }
    if (event.target.classList.contains('red')) {
      console.log("Red btn is clicked");
    }
    else if (!event.target.classList.contains('blue') && !event.target.classList.contains('red')) {
      console.log("Yellow btn is clicked");
    }
  }
})

const btns = document.querySelectorAll('.btn');

btns[0].addEventListener('click', () => {
  btns[3].classList.toggle('red');
})

const redBtn = document.createElement('button');
redBtn.classList.add('red');
btnMain.appendChild(redBtn);