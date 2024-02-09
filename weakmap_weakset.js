let map = new WeakMap();
let john = {name: "john"}

map.set(john, "this is john")
console.log(map.get(john))
john = null;

// #5
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];


let readMessages = new WeakSet();
readMessages.add(...messages);
console.log(readMessages.has({text: "Hello", from: "John"}));

