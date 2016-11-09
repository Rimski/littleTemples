var express = require("express");
var eventRouter = express.Router();
var events = require("../modles/events");

eventRouter.route("/")
    .post(function (req, res) {
        var newEvent = new events(req.body);
        newEvent.save(function (err, event) {
                if (err)res.status(418).send({err: err, success: false, message: "Whoops"});
                else res.send({
                    success: true,
                    message: "Successfully added event",
                    event: event
                });
            });
    });
eventRouter.route("/:id")
    .delete(function (req, res) {
           events.findOneAndRemove({
        _id: req.params.id,
    }, function (err, event) {
        if (err) res.status(500).send(err);
        else res.send({
            success: true,
            message: "BALETED",
            event: event
        });
    })
            })
    .put(function (req, res) {
        events.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {new:true}, function(err, event) {
             if (err) res.status(500).send(err);
            else res.send(event);
        })
})

module.exports = eventRouter;