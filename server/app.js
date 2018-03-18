const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const root = path.join(__dirname, "..", "build/");

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
  res.send({ stories: [] });
});

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
