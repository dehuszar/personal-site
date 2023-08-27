import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { anchorStyles } from '../css/anchors.css.ts';

@customElement('nav-list')
export class NavList extends LitElement {
  @property({ type: String }) currentPath = '';
  @property({ type: String }) pathName = '';
  @property({ type: String }) routes = '';

  static get styles() {
    return [
      anchorStyles,
      css`
        ul {
          display: flex;
          justify-content: flex-end;
          text-align: center;
        }
        
        li {
          /* flex: 1; */
          list-style: none;
        }
        
        a {
          display: block;
          font-family: var(--serif-font);
          font-weight: light;
          padding: 1em 2em;
        }

        li.active a {
          font-weight: bold;
        }
      `
    ];
  }

  render() {
    const routes = JSON.parse(this.routes);
    return Array.isArray(routes) ? html`
      <ul>
        ${routes
          .filter(r => !r.skip)
          .map(r => html`
          <li class="${this.currentPath.startsWith(r.path) ? "active" : ""}">
            <a href="${r.path}">${r.name}</a>
          </li>
        `)}
      </ul>
    ` : ``
  }
}