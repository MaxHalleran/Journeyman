import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const auth_index_router = express.Router();
// const { default: knex } = require('knex');
// import { default: knex } from 'knex';

const secret = process.env.TOKEN_SECRET || 'secret';
// const db = require('../../../../data/db');
import db from '../../../../../data/db.js';
// const auth_middleware = require("./auth_middleware");
import auth_middleware from "./auth_middleware.js";

async function hashDigest(pass: string) {
	return await new Promise((resolve, reject) => {
		bcrypt.hash(pass, 10, function(err, hash) {
			if (err) reject(err)
			resolve(hash)
		});
	});
};

async function validateEmail(email: string) {
	if ( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ) {
		return { valid: false, message: 'Invalid email' };
	} else {
		return db.from('user').select( 'email' ).where({ email: email }).then( (emailList: string[]) => {
			if ( emailList.length === 0 ) {
				return { valid: true, message: 'Valid Email' };
			}
			console.log('not valid');
			return { valid: false, message: 'Email already exists' };;
		})
	}
}

/**
 * Top level here gets database for all users (for now)
*/
auth_index_router.route('/') // Top level gets database
	.get(async (req, res) => {
		try {
			const database = await db("user");
			res.json( database );
		} catch (err) {
			console.error(err);
			res.send("Error " + err);
		};
	});

/**
 * Register route
 * Registers new users
 * Needs to check if email already exists
 * Body needs following parameters:
 * email: string
 * password: string
 */
auth_index_router.route('/register')
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
		const validEmail = await validateEmail(newUser.email);
		if ( validEmail.valid ) {
			try {
				db('user').insert( newUser )
					.then( function ( result: any ) {
						res.json({ success: true, message: 'Account created' });     // respond back to request
					})
					.catch(function(error: any) {
						res.json({ success: false, message: 'Error: ' + error });
					})
			} catch ( err ) {
				res.json({ success: false, message: 'Error: ' + err });
			}
		} else {
			res.json({ success: false, message: validEmail.message });
		}
	});

auth_index_router.route('/login')
	.get(async (req, res) => {
		res.send("The login route");
	})
	.post(async (req, res) => {
		console.log("Accessed");

		const { email, password } = req.body;
		if ( email ) {
			try {
				db('user').where({
						email: email
					}).select('password_digest')
					.then( function ( user_info: any[] ) {
						if (!user_info.length) {
							res.json({ success: false, message: 'User does not exist.' });
						} else {
							bcrypt.compare(password, user_info[0].password_digest)
							.then(function (result) {
								if ( result ) {
									let payload = {
											email: email
										};
									const token = jwt.sign(payload, secret, {
										expiresIn: '1h'
									});
									res.cookie('token', token, { httpOnly: true })
										.sendStatus(200);
								} else {
									res.json({ success: false, message: 'Password did not match' });
								}
							});
						}
					})
					.catch(function(error: any) {
						console.error(error);
						res.json({ success: false, message: 'Error: ' + error });
					})
			} catch ( err ) {
				console.error( err );
				res.json({ success: false, message: 'Error: ' + err });
			}
		};
	});

auth_index_router.route('/logout')
	.get(async (req, res) => {
		res.send("The logout route");
	})
	.post(async (req, res) => {
		res.send("The logout route");
	});

// auth_index_router.all('/token', auth_middleware);

// auth_index_router.route('/token')
// 	.get(auth_middleware, async (req, res) => {
// 		res.sendStatus(200);
// 	})
// 	.post(async (req, res) => {
// 		res.send("The Token route");
// 	});

export default auth_index_router;