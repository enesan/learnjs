class User {
    money = 1000;

    constructor(name) {
        this._name = name;
    }

    sayHi() {
        console.log("Hello, i am", this._name)
    }

    ['say' + 'Age']() {
        console.log("I am 24")
    }
}

Object.defineProperties(User.prototype, {
    name: {
        get() {
            return this._name;
        },
        set(value) {
            this._name = value;
        }
    }
})

console.log(User.prototype.constructor)

let user = new User("Vlad");