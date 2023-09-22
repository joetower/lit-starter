import {LitElement, html, css} from 'lit';

class MyPage extends LitElement {
  static properties = {
    article: {attribute: false},
  };

  static get styles() {
    return css`
      header {
        display: block;
        background-color: var(--primary-color);
        color: var(--on-primary-color);
        padding: 2rem 1rem;
      }

      article {
        background-color: var(--secondary-color);
        padding: 2rem 1rem;
      }

      footer {
        background-color: var(--tertiary-color);
        padding: 2rem 1rem;
      }

      :host {
        display: block;
        width: 100%;
        max-width: 1600px;
        margin: 0 auto;
      }
    `;
  }

  constructor() {
    super();
    this.article = {
      title: 'My Nifty Article',
      text: 'Some witty text.',
      image: 'https://placehold.co/1600x900',
      name: 'Joe',
    };
  }

  headerTemplate() {
    return html`<header>
      <component-heading heading=${this.article.title} level='1'></component-heading>
    </header>`;
  }

  articleTemplate() {
    return html`<article>
      <component-image src="${this.article.image}"></component-image>
      <my-element name="${this.article.name}">
        <p>This is child content</p>
      </my-element>

      <simple-greeting name="${this.article.name}"></simple-greeting>
    </article>`;
  }

  footerTemplate() {
    return html`<footer>Your footer here.</footer>`;
  }

  render() {
    return html`
      ${this.headerTemplate()}
      ${this.articleTemplate()}
      ${this.footerTemplate()}
    `;
  }
}
customElements.define('my-page', MyPage);
