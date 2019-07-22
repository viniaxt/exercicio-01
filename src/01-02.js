const db = require("../db/db");

const findAge = 20;
const people = db
  .filter(item => item.age.lessThen >= findAge && item.age.moreThen <= findAge)
  .map(item => item);

console.log("people", people);
