var express = require("express");
var authRouter = express.Router();
var User = require("../modles/user");
var jwt = require("jsonwebtoken");
var config = require("../config");
var bcrypt = require("bcrypt");

authRouter.post("/login", function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) res.status(500).send(err);
        if (!user) {
            res.status(401).send({
                success: false,
                message: "No user with that name was found."
            });
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, match) {
                if (err) {
                    res.status(500).send(err);
                } else if (!match) {
                    res.status(401).send({
                        success: false,
                        message: "Incorrect password"
                    });
                } else {
                    var token = jwt.sign(user.toObject(), config.secret);
                    res.send({
                        success: true,
                        token: token,
                        user: user.noPassword(),
                        message: "Pota Too"
                    });
                }
            });
        }
    });
});

authRouter.post("/signup", function (req, res) {
    User.findOne({
        name: req.body.name
    }, function (err, existingUser) {
        if (err) res.status(500).send(err);
        if (existingUser) res.status(403).send({
            success: false,
            message: "That username is already taken."
        });
        else {
            var newUser = new User(req.body);
            var userPassword = newUser.password;
            bcrypt.hash(userPassword, 11, function (err, hash) {
                if (err) throw err;
                newUser.password = hash;
                newUser.save(function (err, user) {
                    if (err) res.status(500).send(err);
                    else res.send({
                        success: true,
                        user: user.noPassword(),
                        message: "Successfully created new user"
                    });
                });
            });


        }
    });
});

module.exports = authRouter;