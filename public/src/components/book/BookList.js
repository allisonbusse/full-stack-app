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
            <ul class="books"></ul>
        `;
    }
}

export default BookList;