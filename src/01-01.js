const pessoas = require("../db/db.js")

const pessoasPorCabelo = pessoas.reduce((acumulador, pessoa) => {
  const valoresAnteriores = acumulador[pessoa.hairColor]
    ? acumulador[pessoa.hairColor] // se existir esta posição, recebe-la
    : []

  const newData = { [pessoa.hairColor]: [...valoresAnteriores, pessoa] }

  return {
    ...acumulador,
    ...newData
  }
}, {})

console.log(pessoasPorCabelo)
// var pessoasPorCabelo = new Object()
// pessoas.forEach(pessoa => {
//   if (pessoasPorCabelo[pessoa.hairColor]) {
//     pessoasPorCabelo[pessoa.hairColor].push(pessoa)
//   } else {
//     pessoasPorCabelo[pessoa.hairColor] = [pessoa]
//   }
// })
