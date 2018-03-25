const pgp = require("pg-promise")();

let db = null;

console.log(process.env.DATABASE_URL);
console.log(pgp);
const connect = () => {
  db = pgp(process.env.DATABASE_URL);
};

const query = query => db.any(query);

module.exports = {
  connect,
  query
};
