import Component from '../Component.js';

class BookDetail extends Component {
    renderHTML() {

        const book = this.props.book;

        return /*html*/`
        <div class="list-item">
            <img src="${book.url}">
            <div class="info-container">
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Year Pub: ${book.year}</p>
                <p>Genre: ${book.genre}</p>
                <p>Available: ${book.available}</p>
            </div>
        </div>
        `;
    }
}

export default BookDetail;