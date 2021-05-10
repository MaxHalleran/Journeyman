require('dotenv').config()
const express = require("express");
const app = express();

const port = ( process.env.PORT ? ( process.env.PORT === 3001 ? 3000 : 3001 ) : 3001 );

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  });
}

app.use('/api', require('./routes/api/index'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});