// function f(phrase) {
//     return class {
//         sayHi() {
//             console.log(phrase)}
//     }
// }
//
// class User extends f("Привет") {
//
// }
//
// let u = new User();
// console.log(Object.getPrototypeOf(u))
//
//
// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
// }
//
// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.speed = 0;
//         this.name = name;
//         this.earLength = earLength;
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик", 10)
//
// console.log(rabbit)

// class Animal {
//   constructor(name) {
//     this._name = name;
//   }

//   sayHi() {
//     console.log(this._name);
//   }
// }

// class Rabbit extends Animal {

// }

// let a = new Rabbit("Boboi");

// a.sayHi();

// let rabbit = {
//   eat: function() {
//     console.log("rabbit eat");
//   }
// }

// let littleRabbit = {
//   __proto__: rabbit,
//   eat() {
//     super.eat();
//   }
// }

// littleRabbit.eat();


class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);