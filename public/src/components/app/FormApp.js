import Component from '../Component.js';
import Header from '../app/Header.js';

class FormApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
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