const pessoas = require("../db/db.js")

const pessoaMaisVelha = pessoas.reduce(
  (acc, curr) =>
    acc.age.lessThen > curr.age.lessThen && acc.age.moreThen > curr.age.moreThen
      ? acc
      : curr,
  pessoas[0]
)

console.log(pessoaMaisVelha)
