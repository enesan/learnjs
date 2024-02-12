function sayHi(name) {
    console.log("Hi, my name is...What?")

    sayHi.counter++;
}

//console.log(sayHi.name)
//console.log(sayHi.length)

sayHi.counter = 0;
//sayHi();// кол-во параметров, остаточные не считаются
//sayHi();// кол-во параметров, остаточные не считаются
//sayHi();// кол-во параметров, остаточные не считаются

//console.log(sayHi.counter)

// ф-я счетчик из замыканий с о свойсвом counter
function makeCounter() {
    // вместо let count = 0
    function counter() {
        counter.set = function(value) {
            return counter.count = value;
        }
        counter.decrease = function() {
            return --counter.count;
        }
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

// console.log(counter())
// console.log(counter())
// console.log(counter.set(12))
// console.log(counter.decrease())

let saySayonara = function func(who) {
    if(who) {
        console.log("Sayonara boy", who)
    }
}

//saySayonara("slim sahdy");

// задача 2
function sum(a)
{
    sum.toString  = function() {
        return a;
    }

    if (a === undefined || a === null) return;
    console.log('counter',++sum.counter)
    let f =  function foo(b) {

        console.log('counter',++sum.counter)
        if (b === undefined || b === null) return ;

        console.log("a", a)
        console.log("b", b)
        return sum(a+b);
    }

    f.toString = function(){
        return "2";
    }

    return f;
}

sum[Symbol.toPrimitive] = function (hint) {
    return hint === 'number' ? 12 : "true"
}

sum.valueOf  = function() {
    return 112;
}



sum.counter = 0;
console.log(sum(1)(2))
