import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.ts';
import { headerStyles } from '../css/headers.css.ts';
import './NavList';

@customElement('page-header')
export class PageHeader extends LitElement {
  @property({type: String}) siteTitle = '';

  static get styles() {
    return [
      anchorStyles,
      headerStyles,
      css`
        header {
          display: flex;
        }

        h1 {
          padding: 0.5em 1em;
          margin: 0;
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
      <header>
        <h1 class="site-title"><a href="/">${this.siteTitle}</a></h1>
        <slot></slot>
      </header>
    `;
  }
}
