const express = require("express");
const app = express();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "gum-db.c76cak40aeql.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password123",
    database: "paradise-gum",
    port: 3306,
  },
});

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (like CSS) from 'public' directory
app.use(express.static("public"));

// Route for the home page
app.get("/", (req, res) => {
  knex
    .select()
    .from("Person")
    .then((result) => {
      res.render("index", { celebrities: result });
    });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
