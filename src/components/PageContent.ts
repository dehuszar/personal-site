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
          grid-template-rows: repeat(12, 3em);
          gap: 3em;
          padding: 0 2em;
        }

        header {
          grid-row-end: span 1;
          grid-column-start: 1;
          grid-column-end: span 12;
        }

        header h2 {
          line-height: 3em;
          margin: 0;
        }

        header h3 {
          text-decoration: underline;
        }

        ::slotted(*) {
          grid-row-end: span 6;
        }

        ::slotted(section) {
          grid-column-end: span 2;
          display: inline-grid;
        }

        ::slotted(article) {
          grid-row-end: span 10;
          grid-column-end: span 8;
          grid-column-start: 3;
        }

        ::slotted(.experience) {
          grid-column-start: 3;
        }

        ::slotted(.skills) {
          grid-column-start: 5;
          grid-column-end: span 4;
        }

        ::slotted(.tools) {
          grid-column-start: 9;
          grid-column-end: span 4;
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
