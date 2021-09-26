import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './NavList';

@customElement('page-header')
export class PageHeader extends LitElement {
  @property({type: String}) pageTitle = '';
  @property({type: String}) siteTitle = '';
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
      <header>
        <h1 class="site-title">${this.siteTitle}</h1>
        <h2 class="page-title">${this.pageTitle}</h2>
        <nav>
          <nav-list
            currentPath=${pageContext.path}
            routes=${JSON.stringify(pageContext.routes)}
          ></nav-list>
        </nav>
      </header>
    `;
  }
}
