import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/PageHeader';
import '../components/PageContent';
import '../components/NavPrimary';
import '../components/SummaryJob';
import '../components/SummarySchool';
import '../components/SummarySkill';
import '../components/SummaryTool';

const education = r => r.type === "education";
const experience = r => r.type === "experience";
const skills = r => r.type === "skill";
const tools = r => r.type === "tool";

export default data => {
  
  const { siteTitle, pageContext } = data;
  const { page, type, single } = JSON.parse(data.content);

  return html`
  <style>
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Lora', serif;
    }

    header h3 {
      border-bottom: 1px solid black;
    }

    section header {
      grid-column-end: span 3;
      max-height: 3em;
    }

    summary-tool {
      grid-column-end: span 1;
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
      ${JSON.parse(data.content).type.filter(education).map(p => html`
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
      ${JSON.parse(data.content).type.filter(experience).map(p => html`
        <summary-job slug=${p.slug} job=${p.title}></summary-job>
      `)}
    </section>
    <section class="skills">
      <header>
        <h3>Skills</h3>
      </header>
      ${JSON.parse(data.content).type.filter(skills).map(p => html`
        <summary-skill slug=${p.slug} skill=${p.title}></summary-skill>
      `)}
    </section>
    <section class="tools">
      <header>
        <h3>Tools</h3>
      </header>
      ${JSON.parse(data.content).type.filter(tools).map(p => html`
        <summary-tool slug=${p.slug} tool=${p.title}></summary-tool>
      `)}
    </section>
  </page-content>
`
}