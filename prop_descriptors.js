"use strict";

let user = {
    name: "john",
    toString() {
        return this.name;
    },
    array: []
}


Object.defineProperty(user, 'name', {value: "bob"})
Object.defineProperty(user, 'age', {value: 24})

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

Object.defineProperty(user, 'name', {writable: false})

// user.name = "oleg"

// console.log(user.name)

Object.defineProperty(user, 'toString', {enumerable: false})

// console.log(user)

// Math.PI
// configurable: false - нельзя удалить или изменить атрибуты
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
//Object.defineProperty(Math, 'PI', {configurable: true})

Object.defineProperty(user, 'array', {writable:false, configurable: false});
user.array.push(1,2);
console.log(user.array)



Object.defineProperties(user, {
    name: {writable: true},
    //toString: {enumerable: true}
})

console.log(Object.getOwnPropertyDescriptors(user));

// копирование объекта с его флагами
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

console.log("===============================")
console.log(Object.getOwnPropertyDescriptors(clone))

let clone2 = {}

for(let i in clone) {
    clone2[i] = clone[i];
}

console.log("+++++++++++++++++++++++++++++++")
console.log(Object.getOwnPropertyDescriptors(clone2))

