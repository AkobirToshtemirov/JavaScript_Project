const btnMain = document.getElementById("btn-main");

btnMain.addEventListener('click', (event) => {
  // console.dir(event.target);

  if(event.target && event.target.tagName == 'BUTTON') {
    if(event.target.classList.contains('blue')) {
      console.log("Blue btn is clicked");
    }
    if(event.target.classList.contains('red')) {
      console.log("Red btn is clicked");
    }
    else if(!event.target.classList.contains('blue') && !event.target.classList.contains('red')) {
      console.log("Yellow btn is clicked");
    }
  }
})

const btns = document.querySelectorAll('.btns');

btns.forEach(item => {
  item.addEventListener('click', () => {
    console.log("Click!!!");
  })
})

const redBtn = document.createElement('button');
redBtn.classList.add('red');
btnMain.appendChild(redBtn);