var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: { index: { unique: true } }
    },
    summary: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
// end of of articleSchema constructor    
});

// create Article model via the articleSchema
var Article = mongoose.model("Article", articleSchema);

// exports the model
module.exports = Article;