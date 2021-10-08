import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.ts';
import { headerStyles } from '../css/headers.css.ts';

@customElement('summary-school')
export class SummarySchool extends LitElement {
  @property({ type: String }) permalink = '';
  @property({ type: String }) school = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      css`
        h1 {
          font-family: 'Lato', sans-serif;
          font-size: 1em;
        }
      `
    ];
  }

  render() {
    return html`
      <h1><a href="${this.permalink}">${this.school}</a></h1>
    `;
  }
}