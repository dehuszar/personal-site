import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/PrimaryNav';

export default data => html`
  <page-header
    pageTitle="${data.pageTitle}"
    siteTitle="${data.siteTitle}">
  </page-header>
  <primary-nav
    pageContext=${data.pageContext}></primary-nav>
  <page-content>
    <section>
      <header>
        <h2>Education</h2>
      </header>
      ${JSON.parse(data.content).education.map(p => html`
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
    `)}
    </section>
    <section>
      <header>
        <h2>Experience</h2>
      </header>
      ${JSON.parse(data.content).experience.map(p => html`
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
      `)}
    </section>
    <section>
      <header>
        <h2>Skills</h2>
      </header>
      ${JSON.parse(data.content).skills.map(p => html`
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
      `)}
    </section>
  </page-content>
`