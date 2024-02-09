let range = {
    from: 1,
    to: 5,

}

   range[Symbol.iterator] = function () {
    return {
        current: this.from,
        final: this.to,
        next() {
            return this.current <= this.final ?{done: false, value: this.current++} : {done: true} ;
        }
    }
}

for (let n of range) {
    console.log(n)
}