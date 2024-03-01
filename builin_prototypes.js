let obj = {}

console.log(obj.toString === Object.prototype.toString)

// task 1
function f() {
    console.log("Hello!");
}

Function.prototype.defer = function(timeout) {
    setTimeout( this(), timeout)
}

f.defer(1000); // выведет "Hello!" через 1 секунду

