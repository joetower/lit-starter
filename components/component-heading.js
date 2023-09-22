import {LitElement, css, html} from 'lit';

export class ComponentHeading extends LitElement {
  static properties = {
    level: {},
    heading: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    h1 {
      font-size: 3rem;
    }
    
    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 2rem;
    }
    
    h4 {
      font-size: 1.5rem;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.heading = 'test heading';
    this.level = '2';
  }

  // Render the UI as a function of component state
  render() {
    if(this.level === '1') {
      return html`
      <h1>${this.heading}</h1>
      `;
    }
    else if(this.level === '2') {
      return html`
      <h2>${this.heading}</h2>
      `;
    }
    else if(this.level === '3') {
      return html`
      <h3>${this.heading}</h3>
      `;
    }
    else if(this.level === '4') {
      return html`
      <h4>${this.heading}</h4>
      `;
    }
    else if(this.level === '5') {
      return html`
      <h5>${this.heading}</h5>
      `;
    }
    else if(this.level === '6') {
      return html`
      <h6>${this.heading}</h6>
      `;
    } 
    else {
      return html`
      <strong>${this.heading}</strong>
      `;
    }
  }
}
customElements.define('component-heading', ComponentHeading);
