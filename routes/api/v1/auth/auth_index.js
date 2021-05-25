const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: knex } = require('knex');

const secret = process.env.TOKEN_SECRET || 'secret';
const db = require('../../../../data/db');

let payload = {
	foo: "bar"
};

async function hashDigest(pass) {
	const hashedPassword = await new Promise((resolve, reject) => {
		bcrypt.hash(pass, 10, function(err, hash) {
			if (err) reject(err)
			resolve(hash)
		});
	})

	return hashedPassword
};

const token = jwt.sign(payload, secret);

router.route('/') // Top level gets database
	.get(async (req, res) => {
		try {
			const database = await db("user");
			res.json( database );
		} catch (err) {
			console.error(err);
			res.send("Error " + err);
		};
	});

router.route('/register')
	.get(async (req, res) => {
		res.send("The register route");
	})
	.post(async (req, res) => {
		const passwordDigest = await hashDigest( req.body.password );

		const newUser = {
			email: req.body.email,
			password_digest: passwordDigest,
			first_name: '',
			last_name: ''
		}

		console.log(newUser);

		try {
			db('user').insert( newUser )
				.then( function (result) {
					console.log(result);
					res.json({ success: true, message: 'ok' });     // respond back to request
				})
		} catch (err) {
			console.error(err);
			res.send("Error " + err);
		}
	});

router.route('/login')
	.get(async (req, res) => {
		res.send("The login route");
	})
	.post(async (req, res) => {
		res.send("The login route");
	});

router.route('/logout')
	.get(async (req, res) => {
		res.send("The logout route");
	})
	.post(async (req, res) => {
		res.send("The logout route");
	});

router.route('/token')
	.get(async (req, res) => {
		res.send("The Token route");
	})
	.post(async (req, res) => {
		res.send("The Token route");
	});

module.exports = router;