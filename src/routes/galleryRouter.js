var express = require("express");
var galleryRouter = express.Router();
var temple = require("../modles/temples");

galleryRouter.route("/")
    .post(function (req, res) {
        var newTemple = new temple(req.body);
        newTemple.save(function (err, temple) {
                if (err)res.status(418).send({err: err, success: false, message: "Whoops"});
                else res.send({
                    success: true,
                    message: "Successfully added Temple",
                    temple: temple
                });
            });
    });
galleryRouter.route("/:id")
    .delete(function (req, res) {
           temple.findOneAndRemove({
        _id: req.params.id,
    }, function (err, temple) {
        if (err) res.status(500).send(err);
        else res.send({
            success: true,
            message: "BALETED",
            temple: temple
        });
    })
            })
    .put(function (req, res) {
        temple.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {new:true}, function(err, temple) {
             if (err) res.status(500).send(err);
            else res.send(temple);
        })
})

module.exports = galleryRouter;