import Component from '../Component.js';
import Header from './Header.js';
import BookDetail from '../book/BookDetail.js';
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

        
        getBook(id)
            .then(book => {
                const list = new BookDetail({ book });
                main.appendChild(list.renderDOM());
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