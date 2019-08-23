const URL = '/api';

export function getBooks() {
    const url = `${URL}/books`;

    return fetch(url) 
        .then(response => response.json());
}

export function addBook(book) {
    const url = `${URL}/books`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
    })
        .then(response => response.json());
}

export function getGenres() {
    const url = `${URL}/genres`;

    return fetch(url)
        .then(response => response.json());
}