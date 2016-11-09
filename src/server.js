var express = require("express");
var app = express();
var port = process.env.port || 8000;
var path = require("path");
//npm pacages
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var expressJwt = require("express-jwt");
var config = require("./config");
var mongoose = require("mongoose");
//readers
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
//connection stuff
mongoose.connect(config.database, function() {
});
mongoose.connection.on("connected", function () {
    console.log("conected to database");
});
app.use(express.static(path.join(__dirname, "..", "public")));
//routes
app.use("/api", expressJwt({
    secret: config.secret
}));
app.use("/public", require("./routes/publicRouter"))
app.use("api/auth", require("././routes/authRouter"));
app.use("api/events", require("./routes/eventRouter"));
app.use("api/gallery", require("./routes/galleryRouter"));
//app.use("/api", authRouter)
app.listen(port, function() {
    console.log("Turn down for what? " + port);
});