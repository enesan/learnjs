let user = {
    name: "Joshua",
    money: 1000,
    [Symbol.toPrimitive] (hint){
        console.log(`hint ${hint}`);
        return hint === "string" ? this.name : this.money;
    }
}

console.log(user)
console.log(+user)
console.log(user + 500)

// можем использовать tostring + valueof вместо toPrimitive