const pessoas = require("../db/db")


const letraV = pessoas.sort((old, old1) => {
    if (old.age.lessThen < old1.age.lessThen, old.age.moreThen < old1.age.moreThen) {
        return 1
    }
})

console.log(letraV)