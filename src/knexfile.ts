// import { Knex } from "knex";

// const config: Knex.Config = {

const config = {

	// local environment
	development: {
		client: "pg",
		connection: {
			host : "127.0.0.1",
			user : process.env.USER,
			database : "ujp"
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: { directory: "./data/seeds" },
	},
	
	// staging environment
	staging: {
		client: "pg",
		connection: {
			database: "my_db",
			user:     "username",
			password: "password"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	},

	// live environment
	production: {
		client: "pg",
		connection: {
			connectionString: process.env.DATABASE_URL,
			ssl: { rejectUnauthorized: false },
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: { directory: "./data/seeds" },
	},
};

export default config;