var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Event = new Schema({
    title: String,
    images: Array,
})


module.exports = mongoose.model("Event", Event);