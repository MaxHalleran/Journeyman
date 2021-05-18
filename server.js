const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// API endpoint routes
app.use('/api', require('./routes/api/index'));

// Express only serves static assets in production
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {

  // Client folder built
  app.use(express.static("client/build"));

} else {

  app.get('/', (req, res) => {
    res.send('Error: Development environment accessed.');
  });

}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});