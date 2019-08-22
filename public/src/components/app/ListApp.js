import Component from '../Component.js';
import Header from '../app/Header.js';
import BookList from '../book/BookList.js';
import { getBooks } from '../../services/book-api.js';

class BookListApp extends Component {
    
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const list = new BookList({ books: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getBooks().then(books => {
            list.update({ books });
        });

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