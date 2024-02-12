// function Counter() {
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     }
//     this.down = function() {
//         return --count;
//     }
// }
//
// let counter = new Counter();
// // console.log(counter.up());
// // console.log(counter.up());
// // console.log(counter.down());
//
// // n
//
// console.log(sum(1)(2))
// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }
//
// let x = 1;
//
// function func() {
//     console.log(x); // ?
//
//     let x = 2;
// }
//
// func();

// задача армия функций
function makeArmy() {
    let shooters = [];

    for(let i = 0; i < 10; i++) {
        let shooter = () => { // функция shooter
            console.log( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter); // и добавлять стрелка в массив
    }

    // ...а в конце вернуть массив из всех стрелков
    return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2]();