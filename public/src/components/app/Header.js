import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <li><a href="book-list.html">Book List</a></li>
            <a href="index.html"><img class="header-image" src="./assets/fullstackslogo.png"></a>
            <li><a href="book-form.html">Add a Book</a></li>
        </header>
        `;
    }
}

export default Header;