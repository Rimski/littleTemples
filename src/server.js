var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var port = process.env.port || 8000;
var path = require("path");
var expressJwt = require("express-jwt");
var config = require("./config");
var mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
mongoose.connect(config.database, function() {
});
mongoose.connection.on("connected", function () {
    console.log("conected to database");
});
app.use(express.static(path.join(__dirname, "..", "public")));
app.listen(port, function() {
    console.log("Server running on " + port);
});