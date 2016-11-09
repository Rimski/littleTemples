var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: true,
    }
})

User.methods.noPassword = function () {
    var user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model("User", User);