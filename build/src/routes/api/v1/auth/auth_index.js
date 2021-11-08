var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
var auth_index_router = express.Router();
// const { default: knex } = require('knex');
// import { default: knex } from 'knex';
var secret = process.env.TOKEN_SECRET || 'secret';
// const db = require('../../../../data/db');
import db from '../../../../../data/db.js';
function hashDigest(pass) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        bcrypt.hash(pass, 10, function (err, hash) {
                            if (err)
                                reject(err);
                            resolve(hash);
                        });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
;
function validateEmail(email) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                return [2 /*return*/, { valid: false, message: 'Invalid email' }];
            }
            else {
                return [2 /*return*/, db.from('user').select('email').where({ email: email }).then(function (emailList) {
                        if (emailList.length === 0) {
                            return { valid: true, message: 'Valid Email' };
                        }
                        console.log('not valid');
                        return { valid: false, message: 'Email already exists' };
                        ;
                    })];
            }
            return [2 /*return*/];
        });
    });
}
/**
 * Top level here gets database for all users (for now)
*/
auth_index_router.route('/') // Top level gets database
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var database, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db("user")];
            case 1:
                database = _a.sent();
                res.json(database);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                res.send("Error " + err_1);
                return [3 /*break*/, 3];
            case 3:
                ;
                return [2 /*return*/];
        }
    });
}); });
/**
 * Register route
 * Registers new users
 * Needs to check if email already exists
 * Body needs following parameters:
 * email: string
 * password: string
 */
auth_index_router.route('/register')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("The register route");
        return [2 /*return*/];
    });
}); })
    .post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var passwordDigest, newUser, validEmail;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, hashDigest(req.body.password)];
            case 1:
                passwordDigest = _a.sent();
                newUser = {
                    email: req.body.email,
                    password_digest: passwordDigest,
                    first_name: '',
                    last_name: ''
                };
                return [4 /*yield*/, validateEmail(newUser.email)];
            case 2:
                validEmail = _a.sent();
                if (validEmail.valid) {
                    try {
                        db('user').insert(newUser)
                            .then(function (result) {
                            res.json({ success: true, message: 'Account created' }); // respond back to request
                        })
                            .catch(function (error) {
                            res.json({ success: false, message: 'Error: ' + error });
                        });
                    }
                    catch (err) {
                        res.json({ success: false, message: 'Error: ' + err });
                    }
                }
                else {
                    res.json({ success: false, message: validEmail.message });
                }
                return [2 /*return*/];
        }
    });
}); });
auth_index_router.route('/login')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("The login route");
        return [2 /*return*/];
    });
}); })
    .post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password;
    return __generator(this, function (_b) {
        console.log("Accessed");
        _a = req.body, email = _a.email, password = _a.password;
        if (email) {
            try {
                db('user').where({
                    email: email
                }).select('password_digest')
                    .then(function (user_info) {
                    if (!user_info.length) {
                        res.json({ success: false, message: 'User does not exist.' });
                    }
                    else {
                        bcrypt.compare(password, user_info[0].password_digest)
                            .then(function (result) {
                            if (result) {
                                var payload = {
                                    email: email
                                };
                                var token = jwt.sign(payload, secret, {
                                    expiresIn: '1h'
                                });
                                res.cookie('token', token, { httpOnly: true })
                                    .sendStatus(200);
                            }
                            else {
                                res.json({ success: false, message: 'Password did not match' });
                            }
                        });
                    }
                })
                    .catch(function (error) {
                    console.error(error);
                    res.json({ success: false, message: 'Error: ' + error });
                });
            }
            catch (err) {
                console.error(err);
                res.json({ success: false, message: 'Error: ' + err });
            }
        }
        ;
        return [2 /*return*/];
    });
}); });
auth_index_router.route('/logout')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("The logout route");
        return [2 /*return*/];
    });
}); })
    .post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("The logout route");
        return [2 /*return*/];
    });
}); });
// auth_index_router.all('/token', auth_middleware);
// auth_index_router.route('/token')
// 	.get(auth_middleware, async (req, res) => {
// 		res.sendStatus(200);
// 	})
// 	.post(async (req, res) => {
// 		res.send("The Token route");
// 	});
export default auth_index_router;
