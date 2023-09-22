import {LitElement, css, html} from 'lit';

export class ComponentImage extends LitElement {
  static properties = {
    src: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    img {
      width: 100%;
      max-width: 100%;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.src = 'https://placehold.co/600x400';
  }

  // Render the UI as a function of component state
  render() {
    return html`<img src=${this.src}>`;
  }
}
customElements.define('component-image', ComponentImage);
