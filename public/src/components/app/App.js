import Component from '../Component.js';
import Header from '../app/Header.js';

class App extends Component {

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

        const button = document.createElement('button');
        const p = document.createElement('p');
        p.classList.add('blurb');
        button.innerHTML = 'View Our Book List';
        main.appendChild(p);
        p.appendChild(button);

        button.addEventListener('click', () => {
            window.location = 'book-list.html';
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

export default App;