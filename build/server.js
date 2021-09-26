var express = require("express");
var app = express();
var port = process.env.PORT || 3001;
// API endpoint routes
app.use('/api', require('./routes/api/api_index'));
// Express only serves static assets in production
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    // Client folder built
    app.use(express.static("client/build"));
}
else {
    app.get('/', function (req, res) {
        res.send('Error: Development environment accessed.');
    });
}
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
