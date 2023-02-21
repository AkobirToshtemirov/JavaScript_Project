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

// extends means this class is a child of another class

class Spark extends Car {
  constructor (name, color, speed, isAirbag, extraBallon) {
    super(name, color, speed)
    this.isAirbag = isAirbag;
    this.extraBallon = extraBallon;
  }

  logger() {
    console.log(`Name of the car is ${this.name}. Color is ${this.color}. Speed is ${this.speed}km/h. Airbag is ${this.isAirbag}. ExtraBallon is ${this.extraBallon}`);
  }
}

// const mers = new Car('S500', 'red', 1000);
// console.log(mers);
// console.log(mers.calcSpeed());
// console.log(mers.getColor());

const spark = new Spark("Spark", "Red", 200, "Available", "Availbale 4");
spark.logger();
console.log(spark);