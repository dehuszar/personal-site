import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { experience, education, skills, tools } from '../lib/getRecordsByType';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/NavPrimary';
import '../components/CVSectionExperience';
import '../components/CVSummaryJob';
import '../components/CVSummarySchool';
import '../components/CVSummarySkill';
import '../components/CVSummaryTool';

export default data => {
  
  const { siteTitle, pageContext } = data;
  const { page, articleList, article } = JSON.parse(data.content);

  return html`
  <style>
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Lora', serif;
    }

    header h3 {
      border-bottom: 1px solid black;
    }

    section header {
      grid-column-end: span 2;
      max-height: 3em;
    }

    summary-tool {
      grid-column-end: span 1;
    }

    .skills header {
      grid-column-end: span 3;
    }

    .tools header {
      grid-column-end: span 3;
    }
  </style>
  <page-header
    siteTitle="${siteTitle}">
    <nav-primary
      pageContext=${pageContext}></nav-primary>
  </page-header>
  <page-content pageTitle="${page.title}">
    <section class="education">
      <header>
        <h3>Education</h3>
      </header>
      ${JSON.parse(data.content).articleList.filter(education).map(p => html`
      <summary-school
        endYear=${p.endYear}
        location=${p.location}
        slug=${p.slug}
        school=${p.title}
        startYear=${p.startYear}></summary-school>
    `)}
    </section>
    <cv-section-exp content=${data.content}></cv-section-exp>
    <section class="skills">
      <header>
        <h3>Skills</h3>
      </header>
      ${JSON.parse(data.content).articleList.filter(skills).map(p => html`
        <summary-skill slug=${p.slug} skill=${p.title}></summary-skill>
      `)}
    </section>
    <section class="tools">
      <header>
        <h3>Tools</h3>
      </header>
      ${JSON.parse(data.content).articleList.filter(tools).map(p => html`
        <summary-tool slug=${p.slug} tool=${p.title}></summary-tool>
      `)}
    </section>
  </page-content>
`
}