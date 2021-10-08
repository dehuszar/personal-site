import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/NavPrimary';
import '../components/SummaryJob';
import '../components/SummarySchool';
import '../components/SummarySkill';

export default data => html`
  <page-header
    siteTitle="${data.siteTitle}">
    <nav-primary
      pageContext=${data.pageContext}></nav-primary>
  </page-header>
  <page-content pageTitle="${data.pageTitle}">
    <section class="education">
      <header>
        <h3>Education</h3>
      </header>
      ${JSON.parse(data.content).education.map(p => html`
      <summary-school permalink=${p.permalink} school=${p.title}></summary-school>
    `)}
    </section>
    <section class="experience">
      <header>
        <h3>Experience</h3>
      </header>
      ${JSON.parse(data.content).experience.map(p => html`
        <summary-job permalink=${p.permalink} job=${p.title}></summary-job>
      `)}
    </section>
    <section class="skills">
      <header>
        <h3>Skills</h3>
      </header>
      ${JSON.parse(data.content).skills.map(p => html`
        <summary-skill permalink=${p.permalink} skill=${p.title}></summary-skill>
      `)}
    </section>
  </page-content>
`