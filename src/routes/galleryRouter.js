var express = require("express");
var galleryRouter = express.Router();
var temple = require("../modles/temples");

galleryRouter.route("/")
    .post(function (req, res) {
        var newTemple = new newTemple(req.body);
        newTemple.save(function (err, event) {
                if (err)res.status(418).send({err: err, success: false, message: "Whoops"});
                else res.send({
                    success: true,
                    message: "Successfully added event",
                    event: event
                });
            });
    });
galleryRouter.route("/:id")
    .delete(function (req, res) {
           temple.findOneAndRemove({
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
        temple.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {new:true}, function(err, event) {
             if (err) res.status(500).send(err);
            else res.send(event);
        })
})

module.exports = galleryRouter;