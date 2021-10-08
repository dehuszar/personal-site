import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/PrimaryNav';
import '../components/SchoolSummary';

export default data => html`
  <page-header
    siteTitle="${data.siteTitle}">
    <primary-nav
      pageContext=${data.pageContext}></primary-nav>
  </page-header>
  <page-content pageTitle="${data.pageTitle}">
    <section class="education">
      <header>
        <h3>Education</h3>
      </header>
      ${JSON.parse(data.content).education.map(p => html`
      <school-summary permalink=${p.permalink} school=${p.title}></school-summary>
    `)}
    </section>
    <section class="experience">
      <header>
        <h3>Experience</h3>
      </header>
      ${JSON.parse(data.content).experience.map(p => html`
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
      `)}
    </section>
    <section class="skills">
      <header>
        <h3>Skills</h3>
      </header>
      ${JSON.parse(data.content).skills.map(p => html`
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
      `)}
    </section>
  </page-content>
`