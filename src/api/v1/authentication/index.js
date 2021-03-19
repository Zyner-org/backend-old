var express = require("express");

var api = express.Router();

api.get("/", function (req, res) {
  res.send("Hello from APIv1 root route.");
});

api.get("/users", function (req, res) {
  res.send("List of APIv1 users.");
});

module.exports = api;