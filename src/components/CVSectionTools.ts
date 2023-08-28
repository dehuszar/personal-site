import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.js';
import { headerStyles } from '../css/headers.css.js';
import { cvSectionStyles } from '../css/cv-sections.js';

@customElement('cv-section-tools')
export class CVSectionTools extends LitElement {
  @property({ type: String }) content = null

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      cvSectionStyles,
      css`
        :host {
          grid-column: 9 / span 4;
          grid-row: 1 / 9;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(9, 3em);
        }

        header {
          grid-column: span 4;
        }
      `
    ]
  }

  render() {
    return html`
      <header>
        <h3>Tools</h3>
      </header>
      ${JSON.parse(this.content).map(p => html`
        <summary-tool slug=${p.slug} tool=${p.title}></summary-tool>
      `)}
    `
  }
}