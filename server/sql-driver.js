const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "murdoc",
  database: "cast"
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
