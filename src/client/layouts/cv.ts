import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/PrimaryNav';

export default data => html`
  <style>
    /* FIXME :: this isn't the right place for this */
    article h1 {
      /* FIXME :: VAR NOT WORKING WITHOUT SHADOW DOM
      font-family: var(--sans-serif-font); */
      font-family: 'Lato', sans-serif;
      font-size: 1em;
    }
  </style>
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
      <article>
        <h1><a href="${p.permalink}">${p.title}</a></h1>
      </article>
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