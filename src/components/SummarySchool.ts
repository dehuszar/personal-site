import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.ts';
import { headerStyles } from '../css/headers.css.ts';

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
          margin: 0 0 1em 0;
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
