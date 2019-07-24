const db = require("../db/db");

const people = db.reduce(
  (acc, item) => {
    if (acc && acc.age.lessThen < item.age.lessThen) {
      return item;
    }
    return acc;
  },
  { age: { lessThen: 0 } }
);

console.log("people", people);
