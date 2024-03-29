const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.set("view engine", "njk");
server.use(express.static("public"));

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
});

server.listen(5000, function() {
  console.log("Server is running!");
});

server.get("/", function(req, res) {
  return res.render("teachers");
});

server.get("/students", function(req, res) {
  return res.render("students");
});
