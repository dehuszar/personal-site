import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cvSectionStyles } from '../css/cv-sections.js';

const columns = 2;
const rows = 4;

@customElement('cv-section-exp')
export class CVSectionExp extends LitElement {
  @property({ type: String }) content = null

  static get styles() {
    return [
      cvSectionStyles,
      css`
        :host {
          grid-column: 1 / span ${columns};
          grid-row: 4 / span ${rows};
          grid-template-columns: repeat(${columns}, 1fr);
          grid-template-rows: repeat(${rows}, 3em);
        }

        header {
          grid-column: 1 / span ${columns};
        }
      `
    ]
  }

  render() {
    return html`
      <header>
        <h3>Experience</h3>
      </header>
      ${JSON.parse(this.content)
        .map(({slug, title}) =>
          html`<summary-job slug=${slug} job=${title}></summary-job>`
        )
      }
    `
  }
}