import { html } from 'lit';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/PrimaryNav';

export default data => html`
  <page-header
    siteTitle="${data.siteTitle}">
    <primary-nav
      pageContext=${data.pageContext}></primary-nav>
  </page-header>
  <page-content pageTitle="${data.pageTitle}">
    ${JSON.parse(data.content).items.map(p => html`
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
    `)}
  </page-content>
`