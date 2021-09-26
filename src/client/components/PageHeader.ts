import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './NavList';

@customElement('page-header')
export class PageHeader extends LitElement {
  @property({type: String}) pageTitle = '';
  @property({type: String}) siteTitle = '';
  @property() pageContext = {};
  render() {
    const pageContext = JSON.parse(this.pageContext);
    console.log("pageContext: ", pageContext)

    return html`
      <style>
        :host {
          font-size: 1em;
        }
      </style>
      <header>
        <h1 class="site-title">${this.siteTitle}</h1>
        <h2 class="page-title">${this.pageTitle}</h2>
        <nav>
          <nav-list
            currentPath=${pageContext.path}
            routes=${JSON.stringify(pageContext.routes)}
          ></nav-list>
        </nav>
      </header>
    `;
  }
}

//<ul>
// ${pageContext.routes.map(r => html`
// <li class="${pageContext.path === r.path ? "active" : ""}">
//   <a href="${r.path}">${r.name}</a>
//   ${r.children ? html`<ul>
//     ${r.children && r.children.map(c => html`
//       <li>
//         <a href="${c.path}">${c.name}</a>
//       </li>
//     `)}
//     </ul>` : ``}
// </li>
// `)}
// </ul>