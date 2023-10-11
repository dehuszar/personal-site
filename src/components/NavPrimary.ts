import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './NavList';

@customElement('nav-primary')
export class NavPrimary extends LitElement {
  // pageContent is an object which gets passed in stringified
  @property({type: String}) pageContext = '';
  
  static get styles() {
    return css`
      :host {
        flex-grow: 1;
      }
    `
  }
    
  render() {
    const pageContext = JSON.parse(this.pageContext);
    return html`
      <nav>
        <nav-list
          currentPath=${pageContext.path}
          routes=${JSON.stringify(pageContext.routes)}
        ></nav-list>
      </nav>
    `;
  }
}
