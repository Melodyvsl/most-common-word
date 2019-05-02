const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const routes = require("./route/routes");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// default options
app.use(fileUpload());

// set ejs
app.set("view engine", "ejs");

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", routes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is connected on ${port}!`));
