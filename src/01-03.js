const db = require("../db/db");

const people = db
  .filter(item => item.name.startsWith("V", 0))
  .map(item => item.name);

console.log("Found people ", people);
