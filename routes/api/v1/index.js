const router = require("express").Router();
const db = require("../../../data/db.js");

router.get('/', (req, res) => {
  res.send('This is the api route');
});

router.get('/db', async (req, res) =>  {
  try {
        const database = await db("test");
        res.json({ database });
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});

module.exports = router;