const pessoas = require("../db/db")


const maiorIdade = pessoas.sort((old, old1) => {
    return old1.age.lessThen > old.age.lessThen    
}).reduce((accum, curr) => {
    accum.age.lessThen > curr.age.lessThen
    return accum
})

console.log(maiorIdade)