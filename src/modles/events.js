var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Event = new Schema({
    title: String,
    
    images: Array,
    
    description: String,
})


module.exports = mongoose.model("Event", Event);