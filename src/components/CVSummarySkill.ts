import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css';
import { headerStyles } from '../css/headers.css';

@customElement('summary-skill')
export class SummarySkill extends LitElement {
  @property({ type: String }) slug = '';
  @property({ type: String }) skill = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      css`
        :host {
          grid-column-end: span 1;
          padding-right: 2em;
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
      <h1><a href="/cv/skill/${this.slug}">${this.skill}</a></h1>
    `;
  }
}