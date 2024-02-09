let map = new Map()
console.log(typeof map)
let john = {name: "john"}
map.set(john, "whatever")

let arr = [john]
console.log(map.get(john))
john = null
console.log(map.keys())
console.log(arr[0])
