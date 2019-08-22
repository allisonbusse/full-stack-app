import Component from '../Component.js';

class BookItem extends Component {

    renderHTML() {
        
        const book = this.props.book;

        return /*html*/`
        <li class="each-book">
            <h2>${book.title}</h2>
            <img src="${book.url}">
            <p>Author: ${book.author}</p>
            <p>Year Pub: ${book.year}</p>
            <p>Genre: ${book.genre}</p>
            <p>Available: ${book.available}</p>
        </li>
        `;
    }
}

export default BookItem;