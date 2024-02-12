function sayHi(name, age) {
    console.log(`Hello, I'm ${name}, my age is ${age}`)
}

//setTimeout(() => {console.log("end")})

// let timerId = setTimeout((name, age) => {
//     console.log(`${name} des ${age} des` )
// }, 1000, "John", 22);

//setTimeout(clearTimeout, 500, timerId)
//console.log(timerId)

// Задача 1
// timeout
let start = Date.now();
// setTimeout(function run(from, to) {
//     if(from === to + 1) return;
//     console.log(from, Date.now()-start)
//     return setTimeout(run, 1000, from+1, to);
// }, 1000, 1, 3)

start = Date.now();

function printNumbers(from, to) {
    function go() {
        if (from === to){
            clearInterval(intId);
        }
        console.log(from)
        return from++;
    }
    go();

    let intId = setInterval(go, 1000)
}

printNumbers(1,3)