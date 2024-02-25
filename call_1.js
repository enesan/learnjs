// task 3 debounce
// debounce - для ожидания окончания ввода.
// Вызывается через какое-то время после последнего вызова указанной функции

function work(x) {
    console.log("Do smth", x);
}

//
// function debounce(func, timeout) {
//     let launch;
//     return function (...args) {
//         clearTimeout(launch);
//          launch = setTimeout(() => func(arguments), timeout);
//     }
// }
//
// work = debounce(work, 1000);
//
// work("a");
// setTimeout(() => work("b"), 200);
// setTimeout(() => work("c"), 500)


// task 4 throtlling


 function throttle(func, timeout) {

     let exec;
     return function (x) {
         if (exec === undefined) {
             func(x);
            exec = setInterval(() => {

             }, timeout);
         }

     }
 }

 let f1000 = throttle(work, 1000);

 f1000(1); // показывает 1
 f1000(2); // (ограничение, 1000 мс ещё нет)
 f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано



