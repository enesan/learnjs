// let animal = {
//     eats: true,
//     walk(who) {
//         console.log(`${who} walk`)
//     }
// }
//
// let rabbit = {
//     jump: true,
//     name: "rabby",
//     __proto__: animal
// }
//
// let longEar = {
//     long: 10,
//     __proto__: rabbit
// }
//
// //собственный метод rabbit, а не переписанный из animal
// rabbit.walk = function() {
//     console.log("HHH")
// }
//
// rabbit.walk()

// let user = {
//     name: "John",
//     surname: "Swift",
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
//
//     get fullName() {
//         return `${this.name} ${this.surname}`
//     }
// }
//
// let admin = {
//     name: "Bob",
//     surname: "Doe",
//     __proto__: user
// }
//
// for (let i in admin){
//
//     if(admin.hasOwnProperty(i))
//     console.log(i)
// }

// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3,
//     __proto__: head
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table
// };
//
// let pockets = {
//     money: 2000,
//     __proto__:bed
// };
//
// console.log(bed.glasses)

