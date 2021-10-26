import knex from 'knex';
import knexfile from '../knexfile.js';
var env = process.env.NODE_ENV || 'development';
var configOptions = knexfile[env];
export default knex(configOptions);
