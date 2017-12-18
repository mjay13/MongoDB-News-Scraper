// Scraper Server

var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// set up port
var PORT = process.env.PORT || 3000;

// initiates express
var app = express();

// routes
var route = require("./routes");

// public directory as static
app.use(express.static("public"));

// connects handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// all requests go through the routes file
app.use(routes);

// uses the deployed database, otherwise, uses the local mongodb
var MONGODB_URI = process.env.MONGODB_URI || "mongo://localhost/mongoArticleScrape";

// specified ES6 promises made available
mongoose.Promise = Promise;

// connector for mongodb
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

// listener
app.listen(PORT, function() {
    console.log("Port " + PORT + " open");
});