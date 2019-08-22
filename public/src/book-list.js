import BookListApp from './components/app/ListApp.js';

const app = new BookListApp();
document.body.prepend(app.renderDOM());