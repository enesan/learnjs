function User(name) {
    this.name = name;
    this.isAdmin = false
}

let user = new User("John");
let user2 = new function() {
    this.name = "bob";
    this.isAdmin = false;
}

console.log(user)
console.log(user2.isAdmin)