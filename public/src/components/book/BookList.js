import Component from '../Component.js';
import BookItem from './BookItem.js';

class BookList extends Component {
    
    onRender(dom) {
        const books = this.props.books;

        books.forEach(book => {
            const props = { book: book };
            const bookItem = new BookItem(props);
            const bookItemDOM = bookItem.renderDOM();
            dom.appendChild(bookItemDOM);
        });
    }
    
    
    renderHTML() {
        return /*html*/`
        <div>
            <h1>Welcome to Full Stack Library</h1>
            <p>Blurb</p>
            <ul class="books"></ul>
        </div>
        `;
    }
}

export default BookList;