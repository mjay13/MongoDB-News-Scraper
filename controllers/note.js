var db = require("../models");

module.exports = {
    // find one specific note
    findOne: function(req, res){
        db.Note
            .findOne(req.query)
            .then(function(dbNote) {
                res.json(dbNote);
            });
    },
    // creates a new note
    create: function(req, res) {
        db.Note 
            .create(req.body)
            .then(function(dbNote){
                res.json(dbNote);
            });
    },
    // deletes a specific note via params
    delete: function(req, res) {
        db.Note 
            .remove({ _id: req.params.id })
            .then(function(dbNote){
                res.json(dbNote);
            });
    }
// end of export    
}