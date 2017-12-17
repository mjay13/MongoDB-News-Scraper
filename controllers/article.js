var db = require("../models");

module.exports = {
    // finds all articles, sorts them by date, then sends them back to the user
    findAll: function(req, res) {
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(function(dbArticle) {
                res.json(dbArticle);
            });
    },
    // delete a specific article
    delete: function(req, res) {
        db.Article.remove({ _id: req.params.id })
            .then(function(dbArticle) {
                res.json(dbArticle);
            });
    },
    // update a specific article
    update: function(req, res) {
        db.Article.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        ).then(function(dbArticle){
            res.json(dbArticle);
        });
    }
// end of export
}