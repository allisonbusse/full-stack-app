import Component from '../Component.js';
import Header from '../app/Header.js';
import BookList from '../book/BookList.js';
import books from '../../services/books.js';

class BookListApp extends Component {
    
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const props = { books: books };

        const list = new BookList(props);
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

    }
    
    renderHTML() {
        return /*html*/`
            <div>
                <main>
                </main>
                <footer>
                    <p>&copy; A + A</p>
                </footer>
            </div>
        `;
    }
}

export default BookListApp;