var router = require("express").Router();

// renders the home page
router.get("/", function(req, res) {
    res.render("home");
});

// renders the saved handlebars page
 router.get("/saved", function(req, res) {
     res.render("saved");
 });

module.exports = router;

