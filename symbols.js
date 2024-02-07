let sym = Symbol()
let sum = Symbol()

let user = {
    id: Symbol("id"),
    [sym]: "non",
}

console.log(Reflect.ownKeys(user))

console.log(user[sum])
console.log(user.id.description)