"use strict";

class Car {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  calcSpeed() {
    return this.speed * 100;
  }

  getColor() {
    return this.color;
  }
}

const mers = new Car('S500', 'red', 1000);
console.log(mers);
console.log(mers.calcSpeed());
console.log(mers.getColor());