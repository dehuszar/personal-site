import { LitElement, html, customElement } from 'lit';

@customElement('page-content')
export class PageContent extends LitElement {
  render() {
    return html`
      <style>
        :host {
          font-size: 1em;
        }
      </style>
      <slot></slot>
    `;
  }
}
