let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, (key, value) => key === 'date' ? new Date(value) : value);

console.log(meetup.date.getDate())

let user = {
    name: "Василий иванович",
    age: 62
}

let json = JSON.stringify(user);
console.log(json)
let vas = JSON.parse(json);
console.log(vas)

// задача2

let room = {
    number: 23
};

 meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    if(key === 'occupiedBy' || key === 'self') return undefined;
    return value;
}));