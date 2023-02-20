"use strict";

const person = {
  name: "Joe Black",
  gender: "male",
  age: 25,
  isMarried: true,
  colors: {
    hair: "brown",
    eyes: "gray"
  }
}

// Object.keys(object1) "keys" yordamida object uzunligin bilish (olish) mumkin!

console.log(Object.keys(person));
console.log(Object.keys(person).length);

console.log(person);
// we can delete object's elements by "delete"
delete person.isMarried;

console.log(person);

// forin loops through the object properties

for (const key in person) {
  if(typeof person[key] === "object") {
    for (const i in person[key]) {
      console.log(`Property ${i} has value ${person[key][i]}`);
    }
  } else {
      console.log(`Property ${key} has value ${person[key]}`);
  }
}