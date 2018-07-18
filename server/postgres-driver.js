const pgp = require("pg-promise")();

let db = null;

// Hey you follow my instructions, here's the variable you need to change. I'm using it to deploy to heroku
// but this can wait. Just get rid of process.env.DATABASE_URL and put your url
// it should be 'postgres://[username]:[password]@localhost:5432/casto' so for you
// probably 'postgres://pinard:daves6512@localhost:5432/casto'
// Change it, save and go back to the readme
const DATABASE_URL = process.env.DATABASE_URL;
const connect = () => {
  db = pgp(process.env.DATABASE_URL);
};

const query = query => db.any(query);

module.exports = {
  connect,
  query
};
