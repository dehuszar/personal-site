import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { anchorStyles } from '../css/anchors.css.js';
import { headerStyles } from '../css/headers.css.js';
import { cvSectionStyles } from "../css/cv-sections.js";

@customElement('cv-section-edu')
export class CVSectionEdu extends LitElement {
  @property({ type: String }) content = null

  static get styles() {
    return [
      cvSectionStyles,
      css`
        :host {
          grid-column: span 3;
          grid-row: span 3;
        }

        header {
          grid-column: span 3;
        }
      `
    ]
  }

  render() {
    return html`
      <header>
        <h3>Education</h3>
      </header>
      ${JSON.parse(this.content).map(s => html`
        <summary-school
          endYear=${s.endYear}
          location=${s.location}
          slug=${s.slug}
          school=${s.title}
          startYear=${s.startYear}></summary-school>
      `)}
    `
  }
}