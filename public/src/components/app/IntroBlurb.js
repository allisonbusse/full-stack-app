import Component from '../Component.js';

class IntroBlurb extends Component {
    renderHTML() {
        const title = this.props.title || 'Full Stack Library';

        return /*html*/`
            <div>
            <h1>${title}</h1>
            <
            </div>
        `;
    }
}

export default IntroBlurb;