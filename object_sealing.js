"use strict"

let car = {
    color: "red",
    speed: 200
};

Object.preventExtensions(car);
car.size = 4;

