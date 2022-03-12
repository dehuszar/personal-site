import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/NavPrimary';

export default data => {
  const { siteTitle, pageContext } = data;
  const { page, type, single } = JSON.parse(data.content);

  return html`
    <page-header
      siteTitle="${siteTitle}">
      <nav-primary
        pageContext=${pageContext}></nav-primary>
    </page-header>
    <page-content pageTitle="${page.title}">
      <article>
        <h1><a href="${single.permalink}">${single.title}</a></h1>
        ${unsafeHTML(single.body)}
      </article>
    </page-content>
  `
}
