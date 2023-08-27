import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.ts';
import { headerStyles } from '../css/headers.css.ts';

@customElement('page-header')
export class PageHeader extends LitElement {
  @property({ type: String }) siteTitle = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      css`
        :host {
          display: flex;
          grid-column-end: span 12;
        }

        h1 {
          line-height: 2;
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
        }

        a, a:visited {
          color: var(--text-color);
        }
      `
    ];
  }
  render() {
    return html`
      <h1 class="site-title"><a href="/">${this.siteTitle}</a></h1>
      <slot></slot>
    `;
  }
}
