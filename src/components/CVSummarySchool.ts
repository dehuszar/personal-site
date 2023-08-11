import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.js';
import { headerStyles } from '../css/headers.css.js';

@customElement('summary-school')
export class SummarySchool extends LitElement {
  @property({ type: String }) endYear = '';
  @property({ type: String }) location = '';
  @property({ type: String }) slug = '';
  @property({ type: String }) school = '';
  @property({ type: String }) startYear = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      css`
        :host {
          grid-column-end: span 2;
        }

        h1 {
          font-family: 'Lato', sans-serif;
          font-size: 1em;
        }
      `
    ];
  }

  render() {
    return html`
      <h1><a href="/cv/education/${this.slug}">${this.school}</a></h1>
      <p>${this.location}</p>
      <p>${this.startYear} - ${this.endYear}</p>
    `;
  }
}
