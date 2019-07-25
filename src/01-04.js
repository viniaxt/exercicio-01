const persons = require('../db/db')

const oldPerson = persons.reduce(
  (accumulator, person) =>
    person.age.moreThen > accumulator.age.moreThen ||
    person.age.lessThen > accumulator.age.lessThen
      ? person
      : accumulator,
  persons[0]
)

console.log(oldPerson)
