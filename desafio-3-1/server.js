const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server
});

server.listen(5000, function() {
  console.log("Server is running!");
});

server.get("/", function(req, res) {
  return res.render("home");
});

server.get("/conteudos", function(req, res) {
  return res.render("conteudos");
});

server.use(express.static("public"));

server.use(function(req, res) {
  res.status(404).render("not-found");
});