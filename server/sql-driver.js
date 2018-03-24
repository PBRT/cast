const mysql = require("mysql");

let connection = mysql.createConnection({
  host: process.env.DB_CAST_HOST,
  user: process.env.DB_CAST_USER,
  password: process.env.DB_CAST_PASSWORD,
  database: process.env.DB_CAST_DATABASE
});

const connectDB = () => connection.connect();
const closeDB = () => connection.end();
const queryDB = query =>
  new Promise((res, rej) =>
    connection.query(query, function(err, rows, fields) {
      if (err) rej(err);
      return res(rows);
    })
  );

module.exports = {
  connectDB,
  closeDB,
  queryDB
};
