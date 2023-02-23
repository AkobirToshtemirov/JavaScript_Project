// const date = new Date();

// console.log(date.setHours(16));
// console.log(date);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();
console.log(start.getTime());
console.log(end.getTime());
console.log(end - start);

alert(`Loop completed ${end - start} millisecunds`)