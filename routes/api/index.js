var router = require("express").Router();
var fetchRoutes = require("./fetch");
var noteRoutes = require("./notes");
var articleRoutes = require("./articles");

router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/articles", articleRoutes);

module.exports = router;