var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    _articleeId: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    },
    date: {
        type: Date,
        default: Date.now
    },
    noteText: String
// end of noteSchema constructor    
});

// creates the Note model via the noteSchema
var Note = mongoose.model("Note", noteSchema);

// export the Node model
module.exports = Note;