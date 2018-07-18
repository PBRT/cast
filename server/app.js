const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const postgresDriver = require("./postgres-driver");

const app = express();
const port = process.env.PORT || 5000;

// Needed to render the html
const root = path.join(__dirname, "..", "build/");

// Create and run the database
postgresDriver.connect();

app.use(bodyParser.json());
app.use(express.static(root));

// Basic shit to allow requests from the browser
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Retrieve stories endpoint
app.get("/stories", (req, res) => {
  const SQLQuery = "SELECT * FROM Stories";
  // We do the query to the database
  postgresDriver.query(SQLQuery).then(stories => {
    // We send it back to the browser
    res.send(stories);
  });
});

// Create a story
app.post("/stories", (req, res) => {
  const { title, description, timestamp } = req.body;
  // we make sure there is everything needed
  if (title != null && description != null && timestamp != null) {
    // we do the query
    postgresDriver
      .query(
        `INSERT INTO Stories VALUES ('${title}', '${description}', ${timestamp})`
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

// Endpoint which return the DOM (needed to the browser to display our react app)
// Pass here if none of the endpoint before match with the route (that's why the star)
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

// We run the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
