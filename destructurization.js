let options = {
    size: {
        width: 20,
        height: 30,
    },
    title: "Menu",
    items: [1,2],
    extra: true,
}

let {
    size: {
        width,
        height
    },
    items: [item1, item2]
} = options;

console.log(width)

//showMenu()

function showMenu({size = {}, title = "SPEISEKARTE", items = []} = {}) {
    console.log('Size: ', size);
    console.log('Title: ', title);
    console.log('Item 1: ', items[0]);
}

// Задача 1
let user = {
    name: "John",
    years: 30
};

({name, years: age, isAdmin = false} = user)

console.log(name)
console.log(age)
console.log(isAdmin)

// задача 2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

console.log(topSalary(salaries));


function topSalary(salaries ={}) {
    let max = 0;
    for(let [k,v] of Object.entries(salaries)) {
       if (max < v) max = v;
    }
    return max === 0 ? null : max;
}