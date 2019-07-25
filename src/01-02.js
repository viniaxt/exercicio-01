const pessoas = require("../db/db.js")

const maisDe20MenosDe30 = pessoas.filter(pessoa => {
  if (pessoa.age.lessThen < 30 && pessoa.age.moreThen > 20) {
    return pessoa
  }
})

console.log(maisDe20MenosDe30)
