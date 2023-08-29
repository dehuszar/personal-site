import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.js';
import { headerStyles } from '../css/headers.css.js';
import { cvSectionStyles } from '../css/cv-sections.js';

const columns = 4;
const rows = 9;

@customElement('cv-section-skills')
export class CVSectionSkills extends LitElement {
  @property({ type: String }) content = null
  @property({ type: String }) sectionType = null

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      cvSectionStyles,
      css`
        :host {
          grid-column: 4 / span ${columns};
          grid-row: 1 / ${rows};
          grid-template-columns: repeat(${columns}, 1fr);
          grid-template-rows: repeat(${rows}, 3em);
        }

        header {
          grid-column: span ${columns};
        }
      `
    ];
  }

  render() {
    return html`
      <header>
        <h3>Skills</h3>
      </header>
      ${JSON.parse(this.content).map(p => html`
        <summary-skill slug=${p.slug} skill=${p.title}></summary-skill>
      `)}
    `
  }
}