const express = require("express");

const app = express();
const path = require("path");


app.get("/", (req, res) => {
  res.send("Hey this is a basic Node Js Server");
});



app.listen(5000, () => console.log("Server listening on 5000"));

module.exports = app;
