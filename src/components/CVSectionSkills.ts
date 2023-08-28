import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.js';
import { headerStyles } from '../css/headers.css.js';
import { cvSectionStyles } from '../css/cv-sections.js';

@customElement('cv-section-skills')
export class CVSectionSkills extends LitElement {
  @property({ type: String }) content = null

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      cvSectionStyles,
      css`
        :host {
          grid-column: 5 / span 3;
          grid-row: 1 / 9;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(9, 3em);
        }

        header {
          grid-column: span 3;
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