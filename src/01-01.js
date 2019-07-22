const db = require("../db/db");

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item]
    }),
    {}
  );

const people = groupBy(db, "hairColor");

console.log(people);
