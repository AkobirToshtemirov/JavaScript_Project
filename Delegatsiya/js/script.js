const btnMain = document.getElementById("btn-main");

btnMain.addEventListener('click', (event) => {
  // console.dir(event.target);

  // if(event.target && event.target.tagName == 'BUTTON') {
  //   console.log("btn is clicked");
  // }

  if(event.target && event.target.classList.contains('blue__btn')) {
    console.log("Blue btn is clicked");
  }
})

const btns = document.querySelectorAll('.btns');

btns.forEach(item => {
  
})