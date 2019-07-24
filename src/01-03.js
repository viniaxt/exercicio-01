const pessoas = require("../db/db")


const letraV = pessoas.filter((letra) => {
    if (letra.name.indexOf('V') != -1) {
        return letra
    }
}).sort((old, old1) => {
    if(old1.age.lessThen > old.age.lessThen)
    return 1
})

console.log(letraV)