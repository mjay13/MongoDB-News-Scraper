var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = (
    scrapeArticles = function(req, res) {
        // scrape NYT for articles
        return scrape()
            // inserts articles into the db
            .then(function(articles){
                return db.Article.create(articles);
            })
            // if nothing new to scrape, notify with message
            .then(function(dbArticle) {
                if (dbArticle.length === 0) {
                    res.json({
                        message: "Your articles are already up to date."
                    });
                }
                else {
                    res.json({
                        message: db.Article.length + "new articles have been added."
                    });
                }
            // end of second promise    
            })
            .catch(function(err) {
                res.json({
                    message: "Scrape complete."
                });
            // end of catch
            });
        // end of scrapeArticles function
        }   
// end of export
);