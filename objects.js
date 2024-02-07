// let john = {
//     name: "John",
//     age: 12
// }
//
// let bob = {
//     name: "Bob",
//     age: 33
// }
//
// let users = {};
// Object.assign(users, [john, bob])
//
// console.log(users)
//
// let clone = Object.assign({}, users  )
//
// console.log(clone)
//
// let bruh = {...john};
// console.log(bruh)

let bill = {
    name: "Bill",
    age: 23,
    work: {
        company: "OOO Stal Craft",
        position: "director",
        department: {
            address: "Polov"
        },
    },
    arr: [1,2,3]
}

let dest = {}
// for (let i in bill) {
//     if (typeof bill[i] === "object") {
//         for (let j in bill[i])
//             dest[i] = {...bill[i]}
//     } else {
//         dest[i] = bill[i];
//     }
//
// }

deepCopy(bill, dest)

console.log(dest)
console.log(dest.work.department === bill.work.department)
console.log(typeof bill === "object")

function deepCopy(src, dest) {
    for (let i in src) {
        if (typeof src[i] === "object") {
            deepCopy(src[i], dest[i]={})
        } else {
            debugger
            dest[i] = src[i];
        }
    }
}

