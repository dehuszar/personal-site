import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.js';
import { headerStyles } from '../css/headers.css.js';

@customElement('summary-tool')
export class SummaryTool extends LitElement {
  @property({ type: String }) slug = '';
  @property({ type: String }) tool = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      css`
        :host {
          padding-right: 2em;
          grid-column: span 1;
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
      <h1><a href="/cv/tool/${this.slug}">${this.tool}</a></h1>
    `;
  }
}