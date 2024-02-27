// let worker = {
//     slow(min, max) {
//         console.log(`Called with ${min} ${max}`)
//         console.log(this)
//         return min + max;
//     }
// }
//
// function cachingDecorator(func, hash) {
//     let cache = new Map();
//
//     return function() {
//
//         let key = hash(arguments);
//         if(cache.has(key)) {
//             return cache.get(key);
//         }
//
//         let result = func.call(this, ...arguments);
//         cache.set(key,result)
//         return result;
//     }
// }
//
// function hash(args) {
//     return args[0] + ',' + args[1];
// }
//
// worker.slow = cachingDecorator(worker.slow, hash)
//
// console.log(worker.slow(1,3))
// console.log(worker.slow(1,3))

// task 1
// function work(a, b) {
//     console.log(a + b)
// }
//
// function spy(func) {
//
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//        // return func( args);
//     }
//
//     wrapper.calls = [];
//
//     return wrapper;
// }
//
//
// work = spy(work);
//
// work(1, 2);
// work(4, 5);
//
// for (let args of work.calls) {
//     console.log('call: ', args.join())
// }

// task 2
// function f(...args) {
//     console.log("from f")
//     console.log([].join.call(args));
// }
//
// function delay(func, timeout) {
//
//     return function(...args) {
//         setTimeout(() => func(args), timeout);
//     }
// }
//
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
//
// f1000("test", "2tests");
// f1500("test")

// task 3 debounce
function helloName(name) {
    console.log("hello,", name)
}

// function debounce(func, timeout) {
//
//     let ignition;
//     return function () {
//         clearTimeout(ignition);
//         ignition = setTimeout(() => func(arguments[0]), timeout);
//     }
// }
//
// helloName = debounce(helloName, 1000);
// helloName(1);
// setTimeout(() => helloName(2), 200)
// setTimeout(() => helloName(3), 500)


// task 4

function throttle(func) {

}

helloName = throttle(helloName);
