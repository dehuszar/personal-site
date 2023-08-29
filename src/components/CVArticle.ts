import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { education, experience, skills, tools } from '../lib/getRecordsByType';
import { cvSectionStyles } from "../css/cv-sections";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { animate } from "@lit-labs/motion";
import './CVSectionEducation';
import './CVSectionExperience';
import './CVSectionSkills';
import './CVSectionTools';
import './CVSummaryJob';
import './CVSummarySchool';
import './CVSummarySkill';
import './CVSummaryTool';
import * as images from "../images/*"

@customElement('cv-article')
export class CVArticle extends LitElement {
  @property({ type: Array }) data = null
  @property({ type: Array }) education = []
  @property({ type: Array }) experiences = []
  @property({ type: Array }) skills = []
  @property({ type: Array }) tools = []
  @property({ type: String }) sectionType = null
  @property({ type: String }) articleType = null
  @property({ type: String }) school = null
  @property({ type: String }) job = null
  @property({ type: String }) skill = null
  @property({ type: String }) tool = null
  @property({ type: Object }) article = {
    contents: String,
    degree: String,
    imageAlt: String,
    imageSrc: String,
    endYear: String,
    location: String,
    slug: String,
    tags: String,
    title: String,
    type: String,
  }

  static get styles() {
    return [
      cvSectionStyles,
      css`
        :host {
          grid-column: span 12;
          grid-row: span 8;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(8, 3em);
        }

        article {
          grid-column: 4 / span 4;
        }

        img {
          border-radius: 50%;
          grid-column: 9 / span 4;
          max-width: 100%;
        }
      `
    ]
  }

  connectedCallback(): void {
    super.connectedCallback();
    
    this.articleType = {
      education: this.school,
      experience: this.job,
      skills: this.skill,
      tools: this.tool
    }

    if (!this.data) {
      this.fetchPageCV();
    }
  }

  async fetchPageCV() {
    const response = await fetch(`/data/cv.json`);
    this.data = await response.json();
    this.education = this.data.filter(education);
    this.experiences = this.data.filter(experience);
    this.skills = this.data.filter(skills);
    this.tools = this.data.filter(tools);
    this.setArticle();
  }

  async setArticle() {
    const article = await this[this.sectionType]
      .find(e => e.slug === this.articleType[this.sectionType]);
    this.article = article;
  }
  
  render() {
    const {
      contents,
      degree,
      endYear,
      imageAlt,
      imageSrc,
      location,
      slug,
      tags,
      title,
      type,
    } = this.article;

    const nav = {
      education: html`
        <cv-section-edu
          currentType=${this.sectionType}
          content=${JSON.stringify(this.education)}
          ${animate()}></cv-section-edu>
        <cv-section-exp
          currentType=${this.sectionType}
          content=${JSON.stringify(this.experiences)}
          ${animate()}></cv-section-exp>`,
      experience: html`
        <cv-section-edu
          currentType=${this.sectionType}
          content=${JSON.stringify(this.education)}
          ${animate()}></cv-section-edu>
        <cv-section-exp
          currentType=${this.sectionType}
          content=${JSON.stringify(this.experiences)}
          ${animate()}></cv-section-exp>`,
      skills: html`
        <cv-section-skills
          currentType=${this.sectionType}
          content=${JSON.stringify(this.skills)}
          ${animate()}></cv-section-skills>`,
      tools: html`
        <cv-section-tools
          currentType=${this.sectionType}
          content=${JSON.stringify(this.tools)}
          ${animate()}></cv-section-tools>`
    }

    return html`
      ${nav[this.sectionType]}
      <article>
        <h2>${title}</h2>
        <h4>${location} - ${degree}${Boolean(degree) && Boolean(endYear) ? ` - ` : ``}Class of ${endYear}</h4>
        ${unsafeHTML(contents.toString())}
      </article>
      <img src="${images[imageSrc]}" alt="${imageAlt}" />
    `;
  }
}
