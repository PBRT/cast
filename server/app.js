const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const sqlConnection = require("./sql-driver");

const app = express();
const port = process.env.PORT || 5000;
const root = path.join(__dirname, "..", "build/");

sqlConnection.connectDB();

app.use(bodyParser.json());
app.use(express.static(root));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/stories", (req, res) => {
  sqlConnection.queryDB("SELECT * FROM Stories").then(rows => {
    res.send(rows);
  });
});

app.post("/stories", (req, res) => {
  const { title, description, timestamp } = req.body;
  if (title != null && description != null && timestamp != null) {
    sqlConnection
      .queryDB(
        `INSERT INTO Stories VALUES ('${title}', '${description}', ${timestamp})`
      )
      .then(() => res.send({ status: 200 }));
  } else {
    res.status(400);
    res.send("Missing params");
  }
});

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
