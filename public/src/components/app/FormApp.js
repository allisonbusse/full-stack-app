import Component from '../Component.js';
import Header from '../app/Header.js';
import BookForm from '../book/BookForm.js';
import { getGenres } from '../../services/book-api.js';


class FormApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const headerOne = document.createElement('h1');
        const main = dom.querySelector('main');
        headerOne.textContent = 'Submit Your Book';
        main.prepend(headerOne);

        const blurb = document.createElement('p');
        blurb.classList.add('blurb');
        blurb.textContent = 'Add your own book to be included in our library.';
        main.appendChild(blurb);

        getGenres()
            .then(genres => {
                const bookForm = new BookForm({ genres });
                main.appendChild(bookForm.renderDOM());
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

export default FormApp;