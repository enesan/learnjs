let user = {
    name: "John",
    money: 33,
    [Symbol.toPrimitive](hint) {
        console.log(hint)
        return hint === "string" || hint === "default" ? `Hi, my name is ${this.name}` : this.money;
    },
    toString() {
        console.log("to string")
        return `Hi, my name is ${this.name}`;
    }
}

console.log(71..toString(35))