// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public'));
app.use(express.json()); 

app.get('/api/books', (req, res) => {
    client.query(`
    SELECT
        b.id, 
        b.title,
        b.author, 
        b.year, 
        b.url,
        b.genre_id, 
        g.name as genre, 
        b.available
    FROM books b
    JOIN genres g
    ON b.genre_id = g.id;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.post('/api/books', (req, res) => {
    const book = req.body;
    client.query(`
        INSERT INTO books (title, author, url, year, genre_id, available)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `,
    [book.title, book.author, book.url, book.year, book.genreId, book.available]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/genres', (req, res) => {
    client.query(`
    SELECT
        id,
        name
    FROM genres
    ORDER BY name;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});


//Starting Server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});