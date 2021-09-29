import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/PrimaryNav';

export default data => {
  const { permalink, title, body } = JSON.parse(data.content);
  return html`
  <page-header
    pageTitle="${data.pageTitle}"
    siteTitle="${data.siteTitle}">
  </page-header>
  <primary-nav
    pageContext=${data.pageContext}></primary-nav>
  <page-content>
    <article>
      <h1><a href="${permalink}">${title}</a></h1>
      ${unsafeHTML(body)}
    </article>
  </page-content>
`