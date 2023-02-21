const btnMain = document.getElementById("btn-main");

btnMain.addEventListener('click', (event) => {
  // console.dir(event.target);

  // if(event.target && event.target.tagName == 'BUTTON') {
  //   console.log("btn is clicked");
  // }

  if(event.target && event.target.contains()) {
    console.log("btn is clicked");
  }
})