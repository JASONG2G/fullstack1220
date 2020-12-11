require("dotenv").config;
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs"); // set view engine to ejs.
app.set("views", __dirname + "/views"); // all views come from ./views folder.
app.set("layout", "layouts/layout"); // hook up express-layout.

app.use(expressLayouts);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
