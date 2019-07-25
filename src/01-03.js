const pessoas = require("../db/db.js")

const nomeComV = pessoas
  .filter(pessoa => {
    for (let i = 0; i < pessoa.name.length; i++) {
      if (pessoa.name.charAt(i) === "V") return pessoa.name
    }
  })
  .sort(function(a, b) {
    if (a.age.lessThen > b.age.lessThen && a.age.moreThen > b.age.moreThen) {
      return -1
    }
  })
console.log(nomeComV)
