const express = require("express");
const app = express();

const port = ( process.env.PORT ? ( process.env.PORT === 3001 ? 3000 : 3001 ) : 3001 );

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api', require('./routes/api/index'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});