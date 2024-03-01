let animal ={
    eats: true,
}

let rabChild ={
}

function Rabbit(name) {
    this.name = name;

}

rabChild.__proto__ = animal;

let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("White Rabbit");

Rabbit.prototype.jump = true;




console.log("rabbit 1", rabbit.jump)
console.log("rabbit 1", rabbit2.jump)

// task 2
function User(name) {
    this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user.name ); // undefined





