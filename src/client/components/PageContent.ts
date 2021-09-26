import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
