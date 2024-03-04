let animal = {
    eats: true
}

let falseAnimal = {
    isRobot: true
}

let rabbit = Object.create(animal, {
    jumps: {
        value :true
    }
});

console.log(Object.getPrototypeOf(rabbit) === animal)

Object.setPrototypeOf(rabbit, falseAnimal);

console.log(rabbit.isRobot)

console.log(rabbit.jumps)


// простейшие объекты
let obj = {}
obj = Object.create(null)

let key = "__proto__"
obj[key] = "some value"
console.log(obj[key])

// task 1, // nodejs не вызовет определенный тобой tostring неявно
console.log("\n")


// ваш код, который добавляет метод dictionary.toString
let dictionary = Object.create(null, {
    'toString': {
        value() {
            return Object.keys(this).join();
        },
        enumerable: false,
    }
});
// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ


// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"