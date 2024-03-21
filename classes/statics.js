class User {
    static staticMethod() {
        console.log(this === User);
    }

    commonMethod() {}
}

User.outerStatic = function() {
    console.log("outer static");
};

console.log(User.prototype)

// наследование статических членов
class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(this.name, "бежит со скростью", this.speed);
  }

  static compare(AnimalA, AnimalB) {
    return AnimalA.speed - AnimalB.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(this.name, "прячется");
  }
}

let rabbits = [
    new Rabbit("Белыйй", 10),
    new Rabbit("Черный", 5)
]

rabbits.sort(Rabbit.compare)

rabbits[0].run();

console.log(Object.getPrototypeOf(rabbits[0]))