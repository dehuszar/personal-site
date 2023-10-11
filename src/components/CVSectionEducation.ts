import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cvSectionStyles } from "../css/cv-sections.js";

const columns = 2;
const rows = 3;

@customElement('cv-section-edu')
export class CVSectionEdu extends LitElement {
  @property({ type: String }) content = null

  static get styles() {
    return [
      cvSectionStyles,
      css`
        :host {
          grid-column: 1 / span ${columns};
          grid-row: span ${rows};
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