var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Temple = new Schema({
    title: String,
    
    mainImg: String,
    
    otherImgs: {type: array}
})

module.exports = mongoose.model("Temple", Temple);