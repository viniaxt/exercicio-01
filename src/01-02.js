const pessoas = require("../db/db")

const idade = pessoas.filter((nome) => {
    if(nome.age.lessThen < 30 &&
    nome.age.moreThen > 20) {
    return nome
}})

console.log(idade)