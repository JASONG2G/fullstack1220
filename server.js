require("dotenv").config;
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index"); // get router from index.js 

app.set("view engine", "ejs"); // set view engine to ejs.
app.set("views", __dirname + "/views"); // all views come from ./views folder.
app.set("layout", "layouts/layout"); // hook up express-layout.

app.use(expressLayouts);
app.use(express.static("public")); // public folder is where html and css are at.
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
