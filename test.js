
function sum(a) {

    let currentSum = a

    let f = function(b) {
        return sum(a + b);
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log(sum(2)(3))