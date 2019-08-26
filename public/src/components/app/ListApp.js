import Component from '../Component.js';
import Header from '../app/Header.js';
import BookList from '../book/BookList.js';
import { getBooks } from '../../services/book-api.js';

class BookListApp extends Component {
    
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const headerOne = document.createElement('h1');
        const main = dom.querySelector('main');
        headerOne.textContent = 'Welcome to Full Stacks Library';
        main.prepend(headerOne);

        const blurb = document.createElement('p');
        blurb.classList.add('blurb');
        blurb.textContent = 'Check out our online library for the best online book selections available.';
        main.appendChild(blurb);

        const list = new BookList({ books: [] });
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