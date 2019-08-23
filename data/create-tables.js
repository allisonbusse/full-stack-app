// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE genres (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL
            );

            CREATE TABLE books (
                id SERIAL PRIMARY KEY NOT NULL, 
                title VARCHAR(256) NOT NULL,
                author VARCHAR(256) NOT NULL, 
                year INTEGER NOT NULL, 
                url VARCHAR(256) NOT NULL, 
                genre_id INTEGER NOT NULL REFERENCES genres(id), 
                available BOOLEAN NOT NULL
                );
    `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });