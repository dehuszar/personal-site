import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { experience } from '../lib/getRecordsByType';
import { anchorStyles } from '../css/anchors.css.js';
import { headerStyles } from '../css/headers.css.js';
import { cvSectionStyles } from '../css/cv-section-styles';

type Experience = {
  content: string
  experience: [string]
  slug: string
  title: string
  tools: [string]
  type: string
}

@customElement('cv-section-exp')
export class CVSectionExp extends LitElement {
  @property({ type: String }) content = ""

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      cvSectionStyles,
      css`
        :host {
          grid-column-end: span 4;
          grid-column: 1 / 5;
          grid-row-start: 6;
          grid-template-columns: repeat(2, 1fr);
        }

        header {
          grid-column-end: span 2;
          max-height: 3em;
        }
      `
    ]
  }

  render() {
    return html`
      <header>
        <h3>Experience</h3>
      </header>
      ${JSON.parse(this.content)?.articleList
        .filter(experience)
        .map(({slug, title}) =>
          html`<summary-job slug=${slug} job=${title}></summary-job>`
        )
      }
    `
  }
}