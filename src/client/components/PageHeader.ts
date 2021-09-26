import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './NavList';

@customElement('page-header')
export class PageHeader extends LitElement {
  @property({type: String}) pageTitle = '';
  @property({type: String}) siteTitle = '';
  render() {

    return html`
      <style>
        :host {
          font-size: 1em;
        }
      </style>
      <header>
        <h1 class="site-title">${this.siteTitle}</h1>
        <h2 class="page-title">${this.pageTitle}</h2>
      </header>
    `;
  }
}
