import { css, html, LitElement, PropertyValueMap } from "lit";
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
import * as images from "../images/*";

import { articleJob } from './CVArticleJobTemplate.js';
import { articleSchool } from './CVArticleSchoolTemplate.js';

@customElement('cv-article')
export class CVArticle extends LitElement {
  @property({ type: Array }) data = null
  @property({ type: Array }) education = []
  @property({ type: Array }) experience = []
  @property({ type: Array }) skills = []
  @property({ type: Array }) tools = []
  @property({ type: String }) sectionType = null
  @property({ reflect: true }) get articleType() {
    return {
      education: this.school,
      experience: this.job,
      skills: this.skill,
      tools: this.tool
    }
  }
  @property({ type: String }) school = null
  @property({ type: String }) job = null
  @property({ type: String }) skill = null
  @property({ type: String }) tool = null
  @property({ type: Object }) article = {
    contents: String,
    degree: String,
    imageAlt: String,
    imageSrc: String,
    imageType: String,
    endYear: String,
    location: String,
    slug: String,
    startYear: String,
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

        figure {
          border-radius: 50%;
          /* grid-row: 1 / span 7; */
					margin: 0;
					overflow: auto;
        }

        p {
          line-height: 1.6;
        }
      `
    ]
  }

  connectedCallback(): void {
    super.connectedCallback();

    if (!this.data) {
      this.fetchPageCV();
    }
  }

  protected willUpdate(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (changedProperties.get('job')) {
      this.setArticle();
    }
  }

  async fetchPageCV() {
    const response = await fetch(`/data/cv.json`);
    this.data = await response.json();
    this.education = this.data.filter(education);
    this.experience = this.data.filter(experience);
    this.skills = this.data.filter(skills);
    this.tools = this.data.filter(tools);
    this.setArticle();
  }

  setArticle() {
    const article = this[this.sectionType]
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
      imageType,
      location,
      slug,
      startYear,
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
          content=${JSON.stringify(this.experience)}
          ${animate()}></cv-section-exp>`,
      experience: html`
        <cv-section-edu
          currentType=${this.sectionType}
          content=${JSON.stringify(this.education)}
          ${animate()}></cv-section-edu>
        <cv-section-exp
          currentType=${this.sectionType}
          content=${JSON.stringify(this.experience)}
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


    const schoolContent = {
      contents,
      degree,
      endYear,
      imageAlt,
      images,
      imageSrc,
      imageType,
      location,
      nav,
      sectionType: this.sectionType,
      title,
    }

    const jobContent = {
      contents,
      endYear,
      imageAlt,
      images,
      imageSrc,
      imageType,
      nav,
      sectionType: this.sectionType,
      startYear,
      title,
    }

    switch (this.sectionType) {
      case 'education':
        return articleSchool(schoolContent);
      case 'experience':
        return articleJob(jobContent);
    }
  }
}
