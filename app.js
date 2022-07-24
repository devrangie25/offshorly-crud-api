const express = require('express');
const app = express()
const bodyParser = require("body-parser")
const apiRoutes = require('./routes/api.route');

require('dotenv').config();

const PORT = process.env.PORT || '4000';

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
		limit: "50mb",
		parameterLimit: 100000,
	})
)

app.get("/api/test", function (req, res) {
	res.send("<h1>Connected</h1>")
})

app.use("/api", apiRoutes)

app.listen(PORT, function (err) {
	if (err) console.log(err)
	console.log("Server listening on PORT", PORT)
})