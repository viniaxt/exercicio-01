const pessoas = require("../db/db")


const letraV = pessoas.filter((letra) => {
    if (letra.name.indexOf('V') != -1) {
        return letra
    }
}).sort((old, old1) => {
    if (old.age.lessThen < old1.age.lessThen, old.age.moreThen < old1.age.moreThen) {
        return 1
    }
})

console.log(letraV)