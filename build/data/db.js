"use strict";
var knex = require('knex');
var knexfile = require('../knexfile');
var env = process.env.NODE_ENV || 'development';
var configOptions = knexfile[env];
module.exports = knex(configOptions);
