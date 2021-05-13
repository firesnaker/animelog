const express = require("express");
const router = require("./routes");
const app = new express;
const port = 3000;

app.set("view engine", "ejs");
app.use("/", router);
app.use(express.static('public'));

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
