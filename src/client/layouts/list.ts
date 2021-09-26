import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/PageHeader';
import '../components/PageContent';

export default data => html`
  <page-header
    pageContext=${data.pageContext}
    pageTitle="${data.pageTitle}"
    siteTitle="${data.siteTitle}">
  </page-header>
  <page-content>
    ${JSON.parse(data.content).map(p => html`
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
    `)}
  </page-content>
`