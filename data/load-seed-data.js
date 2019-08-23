// Load Environment Variables from the .env file
require('dotenv').config();
const books = require('./books');
const genres = require('./genres');

// Application Dependencies
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect()
    .then(() => {
        return Promise.all(
            genres.map(genre => {
                return client.query(`
                INSERT INTO genres (name)
                VALUES ($1)
                RETURNING *;
                `,
                [genre])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(genres => {
        return Promise.all(
            books.map(book => {
                const genre = genres.find(genre => {
                    return genre.name === book.genre;
                });
                const genreId = genre.id;

                return client.query(`
                INSERT INTO books (title, author, year, url, genre_id, available)
                VALUES ($1, $2, $3, $4, $5, $6);
                `,
                [book.title, book.author, book.year, book.url, genreId, book.available]);
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