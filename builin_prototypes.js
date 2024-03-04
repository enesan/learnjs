let obj = {}

console.log(obj.toString === Object.prototype.toString)

// task 1
function f() {
    console.log("Hello!");
}

// Function.prototype.defer = function(timeout) {
//     setTimeout( this, timeout)
// }

//f.defer(1000); // выведет "Hello!" через 1 секунду

f = function (a, b) {
    console.log( a + b );
}

Function.prototype.defer = function(timeout) {
    return (a,b) => {
        setTimeout(this, timeout, a, b)
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.