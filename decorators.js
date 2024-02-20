let worker = {
    someMethod() {
        return 2;
    },
    slow(min, max) {
        console.log(`Called with ${min},${max} `)
        return min + max + this.someMethod();
    }
}


function cachingDecorator(func, hash) {
    let cache = new Map();

    return function () {
        let key = hash(arguments);
        if (cache.has(key)) {
            console.log("got from cache")
            return cache.get(key);
        }

       // let result = func.call(this, ...arguments);
        // или
        let result = func.apply(this, arguments)

        cache.set(key, result);
        return result;
    }
}

function hash() {
    return [].join.call(arguments);
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(1,2));
console.log(worker.slow(1,2));
