// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect()
    .then(() => {
        return Promise.all(
            books.map(book => {
                return client.query(`
                INSERT INTO books (title, author, year, url, genre, available)
                VALUES ($1, $2, $3, $4, $5, $6);
                `,
                [book.title, book.author, book.year, book.url, book.genre, book.available]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });