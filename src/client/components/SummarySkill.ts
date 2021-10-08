import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.ts';
import { headerStyles } from '../css/headers.css.ts';

@customElement('summary-skill')
export class SummarySkill extends LitElement {
  @property({ type: String }) permalink = '';
  @property({ type: String }) skill = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      css`
        h1 {
          font-family: 'Lato', sans-serif;
          font-size: 1em;
        }
      `
    ];
  }

  render() {
    return html`
      <h1><a href="${this.permalink}">${this.skill}</a></h1>
    `;
  }
}