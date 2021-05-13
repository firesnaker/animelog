const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index", { some_text: "Hello World from EJS"});
});

module.exports = router;
