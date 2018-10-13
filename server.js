var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(
        "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});
module.exports = app;