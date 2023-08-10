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
          gap: 1em 3em;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(12, 3em);
          padding: 0 2em;
        }

        header {
          grid-row-end: span 1;
          grid-column: 1 / 12;
        }

        header h2 {
          line-height: 3em;
          margin: 0;
        }

        header h3 {
          text-decoration: underline;
        }

        ::slotted(section) {
          gap: 1em 3em;
          grid-column-end: span 4;
          display: grid;
        }

        ::slotted(article) {
          grid-column-end: span 8;
          grid-column-start: 3;
          grid-row-end: span 10;
        }

        ::slotted(.education) {
          grid-column 1 / 5;
          grid-row: 2 / 2;
          grid-template-columns: repeat(2, 1fr);
        }

        ::slotted(.experience) {
          grid-column: 1 / 5;
          grid-row-start: 6;
          grid-template-columns: repeat(2, 1fr);
        }

        ::slotted(.skills) {
          grid-column-end: span 4;
          grid-column-start: 5;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(9, 3em);
        }

        ::slotted(.tools) {
          grid-column-end: span 4;
          grid-column-start: 9;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(9, 3em);
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
