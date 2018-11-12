const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const postgresDriver = require("./postgres-driver");
const fileUpload = require('express-fileupload');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

const app = express();
const port = process.env.PORT || 5000;

// Needed to render the html
const root = path.join(__dirname, "..", "build/");

// Create and run the database
postgresDriver.connect();

app.use(bodyParser.json());
app.use(express.static(root));
app.use(fileUpload());

// Basic shit to allow requests from the browser
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, HEAD, POST, PUT, DELETE, PATCH, OPTIONS",
  )
  next();
});

// Retrieve stories endpoint
app.get("/stories", (req, res) => {
  const dateOrder = req.query.dateOrder;
  const id = req.query.id;
  let SQLQuery;
  if(id !== undefined) {
    SQLQuery = `SELECT * FROM stories WHERE id='${id}'`;
  } else {
    SQLQuery = "SELECT * FROM Stories ORDER BY timestamp " + dateOrder + " LIMIT 20";
  }
  // We do the query to the database
  postgresDriver.query(SQLQuery).then(stories => {
    // We send it back to the browser
    res.send(stories);
  });
});

// Retrieve 1 story endpoint
app.get("/stories/:story_id", (req, res) => {
  const id = req.params.story_id;
  SQLQuery = `SELECT * FROM stories WHERE id='${id}'`;
  postgresDriver.query(SQLQuery).then(story => {
    res.send(story);
  });
});

// Create a story
app.post("/stories", upload.single("uploadImg"), (req, res) => {
  const uploadImg = req.files
  console.log(uploadImg)
  const { username, title, description, timestamp } = req.body;
  // we make sure there is everything needed
  if (username != null && title != null && description != null && timestamp != null) {
    // we do the query
    postgresDriver
      .query(
        `INSERT INTO Stories (id, username, title, description, timestamp) VALUES (default, '${username}', '${title}', '${description}', ${timestamp})`
      )
      .then(() => {
        // we inform the browser it's all good
        res.send({ status: 200 });
      });
  } else {
    res.status(400);
    res.send("Missing params");
  }
});

//Delete a story
app.delete("/stories/:story_id", (req, res) => {
  const id = req.params.story_id;
  console.log(id)
  if (id !== null) {
    postgresDriver
      .query(
        `DELETE FROM stories WHERE id='${id}'`
      )
    .then(() => {
      res.send({ status: 200 });
    });
  } else {
    res.status(400);
    res.send("Missing params");
  }
});

// Endpoint which return the DOM (needed to the browser to display our react app)
// Pass here if none of the endpoint before match with the route (that's why the star)
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

// We run the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});