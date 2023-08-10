import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.ts';
import { headerStyles } from '../css/headers.css.ts';

@customElement('summary-job')
export class SummaryJob extends LitElement {
  @property({ type: String }) slug = '';
  @property({ type: String }) job = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      css`
        :host {
          grid-column-end: span 1;
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
      <h1><a href="/cv/experience/${this.slug}">${this.job}</a></h1>
    `;
  }
}