import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/NavPrimary';

export default data => {
  const { siteTitle, pageContext } = data;
  const { page, type, single } = JSON.parse(data.content);

  const { contents, permalink, title } = single;

  return html`
    <page-header
      siteTitle="${siteTitle}">
      <nav-primary
        pageContext=${pageContext}></nav-primary>
    </page-header>
    <page-content pageTitle="${page.title}">
      <article>
        <h1><a href="${permalink}">${title}</a></h1>
        ${unsafeHTML(contents)}
      </article>
    </page-content>
  `
}
