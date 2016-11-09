var express = require("express");
var publicRouter = express.Router();
var events = require("../modles/events");
var temple = require("../modles/temples");

publicRouter.route("/temples")
    .get(function (req, res) {
        temple.find({}, function (err, temple) {
            if (err) res.status(500).send(err);
            res.send(temple);
        });
    })


publicRouter.route("/events")
    .get(function (req, res) {
        events.find({}, function (err, events) {
            if (err) res.status(500).send(err);
            res.send(events);
        });
    })

module.exports = publicRouter;