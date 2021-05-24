const router = require('express').Router();
const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET || 'secret';
const db = require("../../../data/db.js");

let payload = {
	foo: "bar"
};

const token = jwt.sign(payload, secret);

router.route('/')
	.get(async (req, res) => {
		try {
			const database = await db("user");
			res.json( database );
		} catch (err) {
			console.error(err);
			res.send("Error " + err);
		};
	})
	.post((req, res) => {
		res.json(token);
	})
	.put((req, res) => {
		res.json(token);
	})
	// .delete((req, res) => {  // No delete route for users
	// 	res.json(token);
	// })

module.exports = router;