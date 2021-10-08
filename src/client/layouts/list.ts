import { html } from 'lit';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/NavPrimary';

export default data => html`
  <page-header
    siteTitle="${data.siteTitle}">
    <nav-primary
      pageContext=${data.pageContext}></nav-primary>
  </page-header>
  <page-content pageTitle="${data.pageTitle}">
    ${JSON.parse(data.content).items.map(p => html`
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
    `)}
  </page-content>
`