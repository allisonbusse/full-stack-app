const URL = '/api';

export function getBooks() {

    const url = `${URL}/books`;

    return fetch(url) 
        .then(response => response.json());
}