const persons = require('../db/db')

const groupedHair = persons.reduce(
  (accumulator, person) => ({
    ...accumulator,
    [person.hairColor]: [...(accumulator[person.hairColor] || []), person]
  }),
  {}
)

const groupedHair2 = persons.reduce((accumulator, person) => {
  const hair = accumulator[person.hairColor] || []
  const people = [...hair, person]

  const groupedHairData = {
    [person.hairColor]: people
  }

  return {
    ...accumulator,
    ...groupedHairData
  }
}, {})

console.log('Grouped Hair 1 => ', groupedHair)
console.log('Grouped Hair 2 => ', groupedHair2)
