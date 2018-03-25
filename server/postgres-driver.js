const pgp = require("pg-promise")();

let db = null;

const connect = () => {
  db = pgp(process.env.DATABASE_URL);
};

const query = query => db.any(query);

module.exports = {
  connect,
  query
};
