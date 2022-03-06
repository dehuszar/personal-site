import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.ts';
import { headerStyles } from '../css/headers.css.ts';
import { textStyles } from '../css/text.css.ts';

@customElement('page-content')
export class PageContent extends LitElement {
  @property({type: String}) pageTitle = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      textStyles,
      css`
        :host {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(12, 50px);
          gap: 1em;
          padding: 0 2em;
        }

        header {
          grid-row-end: span 1;
          grid-column-start: 1;
          grid-column-end: span 12;
        }

        header h2 {
          line-height: 2em;
          margin: 0;
        }

        ::slotted(section) {
          grid-column-end: span 3;
          display: inline-grid;
        }

        ::slotted(article) {
          grid-row-end: span 1;
        }

        ::slotted(.experience) {
          grid-column-start: 4;
        }

        ::slotted(.skills) {
          grid-column-start: 7;
          grid-column-end: span 6;

          grid-template-columns: repeat(3, 1fr);
        }
      `
    ];
  }

  render() {
    return html`
      <header class="page-title">
        <h2>${this.pageTitle}</h2>
      </header>
      <slot></slot>
    `;
  }
}
