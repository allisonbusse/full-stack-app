import Component from '../Component.js';
import Header from './Header.js';
import BookItem from '../book/BookItem.js';
import QUERY from '../../services/QUERY.js';
import { getBook } from '../../services/book-api.js';

class DetailApp extends Component {
    
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const headerOne = document.createElement('h1');
        const main = dom.querySelector('main');
        headerOne.textContent = 'Your Full Stacks Library Pick';
        main.prepend(headerOne);

        const params = QUERY.parse(window.location.search);
        const id = params.id;

        if(!id) {
            window.location = 'book-list.html';
            return;
        }

        const props = { book: [] };
        const list = new BookItem(props);
        main.appendChild(list.renderDOM());

        getBook(id).then(book => {
            console.log(book);
            list.update({ book });
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

export default DetailApp;