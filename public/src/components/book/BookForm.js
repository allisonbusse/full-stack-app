import Component from '../Component.js';
import { addBook } from '../../services/book-api.js';

class BookForm extends Component {

    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const book = {
                title: formData.get('book-title'),
                author: formData.get('author'),
                url: formData.get('image-url'),
                year: +formData.get('year-published'),
                available: formData.get('available') === 'on',
                genre: formData.get('genre')
            };

            addBook(book)
                .then(() => {
                    window.location = `book-list.html`;
                })
                .catch(err => {
                    console.log("your book wasn't saved! :(", err);
                });
        });
    }


    renderHTML() {
        const genres = this.props.genres;
        const optionsList = genres.map(genre => {
            return /*html*/`
                <option value="${genre.id}">${genre.name}</option>
            `;
        });

        return /*html*/`
        <form>
            <p>Book Title: <input type="text" name="book-title" id="book-title" required></p>
            <p>Image URL: <input type="text" name="image-url" id="image-url" required></p>
            <p>Author: <input type="text" name="author" id="author" required></p>
            <p>Year Published: <input name="year-published" type="text" id="year-published" required></p>
            <p>Available: <input name="available" type="checkbox" id="available"></p>
            <p>Genre: 
                <select name="genre" id="genre" required>
                ${optionsList.join('')}
                </select></p>
            <button id="submit-button">Submit</button>
        </form>
        `;
    }
}

export default BookForm;