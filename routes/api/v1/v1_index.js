const express = require("express");
const router = require("express").Router();
const db = require("../../../data/db.js");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.send('This is the api route');
});

router.use('/auth', require('./auth/auth_index'));

router.get('/db', async (req, res) =>  {
  try {
        const database = await db("user");
        res.json({ database });
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});

module.exports = router;