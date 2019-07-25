const persons = require('../db/db')

const personsWithAgeMoreThan20AndLessThan30 = persons.filter(
  person => person.age.moreThen > 20 && person.age.lessThen < 30
)

console.log(personsWithAgeMoreThan20AndLessThan30)
