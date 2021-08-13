const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

const programs = require("./data");

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
});

server.listen(5000, function() {
  console.log("Server is running!");
});

server.get("/", function(req, res) {
  return res.render("home");
});

server.get("/programs", function(req, res) {
  return res.render("programs", {items: programs});
});

server.get("/programs/:programId", function(req, res) {
  const id = req.params.programId;

  const program = programs.find(program => {
    return program.id === id;
  });

  if (!program) {
    return res.render("not-found");
  }

  return res.render("program", { program });
})

server.use(express.static("public"));

server.use(function(req, res) {
  res.status(404).render("not-found");
});