let user = {
    name: "John",
    age: 20,
    sayHi() {
        console.log("Hi, I am", this.name)
    }
}

user.sayHi();

let company = {
    name: "OOO Accred",
    status: "active",

}

company.f = hireEmployee;

function hireEmployee() {
    console.log("you accepted in", this.name);
}



company.f()