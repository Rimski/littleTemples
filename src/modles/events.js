var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Event = new Schema({
    title: String,
    images: {type: array}
})


module.exports = mongoose.model("Event", Event);