"use strict";

function first(callBack) {
  setTimeout(() => {
    console.log(1);
    callBack(); 
  }, 2000)
}

function second() {
  console.log(2);
}

first(second);


// function educateStudent(subject, callBack) {
//   console.log(`I wanna teach ${subject}`);
//   callBack();
// }

// function call() {
//   console.log("CallBack");
// }

// educateStudent("JavaScript", call);