export default {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: process.env.USER,
            database: 'ujp'
        },
        migrations: {
            directory: './data/migrations',
        },
        seeds: { directory: './data/seeds' },
    },
    staging: {
        client: 'pg',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    production: {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        },
        migrations: {
            directory: './data/migrations',
        },
        seeds: { directory: './data/seeds' },
    }
};
