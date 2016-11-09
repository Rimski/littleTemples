var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Temple = new Schema({
    title: String,
    
    mainImg: String,
    
    otherImgs: Array,
})

module.exports = mongoose.model("Temple", Temple);