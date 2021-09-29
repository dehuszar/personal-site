import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nav-list')
export class PageHeader extends LitElement {
  @property({type: String}) currentPath = '';
  @property() routes = [];

  render() {
    const routes = JSON.parse(this.routes);
    return Array.isArray(routes) ? html`
        <style>
          :host {
            font-size: 1em;
          }
        </style>
        <ul>
            ${routes.map(r => html`
              <li class="${this.currentPath.startsWith(r.path) ? "active" : ""}">
                <a href="${r.path}">${r.name}</a>
                ${r.children && r.children.length > 0
                  ? html`
                    <nav-list
                      currentPath=${this.currentPath}
                      routes=${JSON.stringify(r.children)}
                    ></nav-list>`
                  : html``}
              </li>
            `)}
    ` : ``
  }
}