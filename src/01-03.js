const persons = require('../db/db')

const personsWithV = persons
  .filter(person => person.name.indexOf('V') !== -1)
  .sort((a, b) =>
    a.age.moreThen > b.age.moreThen && a.age.lessThen > b.age.lessThen ? -1 : 0
  )

console.log(personsWithV)
