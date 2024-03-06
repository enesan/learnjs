function f(phrase) {
    return class {
        sayHi() {
            console.log(phrase)}
    }
}

class User extends f("Привет") {

}

let u = new User();
console.log(Object.getPrototypeOf(u))


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }
}

let rabbit = new Rabbit("Белый кролик", 10)

console.log(rabbit)