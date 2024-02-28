let user = {
    name: "john",
    surname: "enesan",

    get fullName() {
        return `${this.name} ${this.surname}`
    },

    // set fullName(value) {
    //     [this.name, this.surname] = value.split(' ');
    // },

    set age(value) {
        if(value < 18) {
            console.log("you have the whole life in front of you");
            return;
        }
         this._age = value;
    },

    get age() {
        return this._age;
    },

    get birthday() {
        return new Date().getFullYear() - new Date(1992,6,1).getFullYear();
    }
};

Object.defineProperty(user, 'fullName', {
    set(value) {
        [this.name, this.surname] = value.split(' ');
    }
})

user.fullName = 'Mari Antuanette'
console.log(user.fullName)

console.log(Object.getOwnPropertyDescriptor(user, 'fullName'));

user.age = 22;
console.log(user.age)
console.log(user.birthday)



