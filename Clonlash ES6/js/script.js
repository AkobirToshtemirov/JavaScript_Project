"use strict";

// // cloning Array and Object

// const num = {
//   x: 10,
//   y: 5,
//   // z: 20
// }

// const newNum = num; // Reference should be given to correct that mistake

// newNum.x = 20;  // it will change both objects: num and newNum. Use Refernce
// console.log(num);
// console.log(newNum);


// function copyObject(object) {
//   let emptyObject = {};

//   for (const key in object) {
//     emptyObject[key] = object[key]
//   }

//   return emptyObject;
// }

// const numbers = {
//   x: 10,
//   y: 20,
//   z: 14
// }

// const newNumbers = copyObject(numbers);

// newNumbers.z = 30;

// console.log(numbers);
// console.log(newNumbers);

// const numObj = {
//   a: 10,
//   b: 20,
//   c: {
//     w: 5,
//     e: 10
//   }
// }

// const newNumObj = Object.assign({}, numObj)

// console.log(newNumObj);

// newNumObj.a = 150;
// console.log(numObj);
// console.log(newNumObj);

// const numObj = {
//   a: 10,
//   b: 20,
//   c: {
//     w: 5,
//     e: 10
//   }
// }

// const numObj2 = {
//   f: 20000
// }

// const newNumObj = Object.assign(numObj, numObj2)

// console.log(newNumObj);

const arr = [1, 2, 3, 4]

// function cloneArr(array) {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i];
//   }

//   return newArray;
// }

// const newArr = cloneArr(arr);

const newArr2 = arr.slice(0, arr.length)

console.log(newArr2);


// spread operator

const team1 = ['aaa', 'bbb']
const team2 = ['ccc', 'ddd']

const allTeam = [...team1, ...team2]
console.log(allTeam);