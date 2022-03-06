import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/NavPrimary';
import '../components/SummaryJob';
import '../components/SummarySchool';
import '../components/SummarySkill';

const education = r => r.type === "school";
const experience = r => r.type === "job";
const skills = r => r.type === "skill";

export default data => html`
  <style>
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Lora', serif;
    }

    .skills header {
      grid-column-end: span 3;
    }
  </style>
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
      ${JSON.parse(data.content).filter(education).map(p => html`
      <summary-school
        endYear=${p.endYear}
        location=${p.location}
        slug=${p.slug}
        school=${p.title}
        startYear=${p.startYear}></summary-school>
    `)}
    </section>
    <section class="experience">
      <header>
        <h3>Experience</h3>
      </header>
      ${JSON.parse(data.content).filter(experience).map(p => html`
        <summary-job slug=${p.slug} job=${p.title}></summary-job>
      `)}
    </section>
    <section class="skills">
      <header>
        <h3>Skills</h3>
      </header>
      ${JSON.parse(data.content).filter(skills).map(p => html`
        <summary-skill slug=${p.slug} skill=${p.title}></summary-skill>
      `)}
    </section>
  </page-content>
`