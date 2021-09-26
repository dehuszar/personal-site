import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './NavList';

@customElement('primary-nav')
export class PrimaryNav extends LitElement {
  // pageContent is an object which gets passed in stringified
  @property({type: String}) pageContext = '';
  render() {
    const pageContext = JSON.parse(this.pageContext);

    return html`
      <style>
        :host {
          font-size: 1em;
        }
      </style>
      <aside>
        <nav>
          <nav-list
            currentPath=${pageContext.path}
            routes=${JSON.stringify(pageContext.routes)}
          ></nav-list>
        </nav>
      </aside>
    `;
  }
}
