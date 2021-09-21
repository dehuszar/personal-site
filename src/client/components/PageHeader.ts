import { CoreComponent, loadComponent } from '../lib/utils';
import { LitElement, html, property, customElement } from 'lit';

@customElement('page-header')
export class PageHeader extends LitElement {
  @property({ type: String }) title = '';
  render() {
    return html`
      <style>
        :host {
          font-size: 1em;
        }
      </style>
      <header>
        <h1 class="page-title">${this.title}</h1>
      </header>
    `;
  }
}
