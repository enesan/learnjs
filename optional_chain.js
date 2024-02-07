/**
 * в эту фцункцию не передашь параметр, поэтому в этом случае создавать только без параметов
 */

let user = new function (name) {
    this.name = name;
    this.age = 33;
    this.color = "pink";
    this.sayHello = () => {
        console.log(`hello, i am ${this.name}`)
    }
}

let boober = {
    name: "Booba",
    age: 15,
    sayHi() {
        console.log(`Oh yeah, Im ${this.name}`)
    }
}

let key = "color"
boober.sayHi?.();
console.log(user?.[key])
console.log(boober?.[key])
