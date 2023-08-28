import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { education, experience, skills, tools } from '../lib/getRecordsByType';
import { cvSectionStyles } from "../css/cv-sections";
import '../components/CVSectionEducation';
import '../components/CVSectionExperience';
import '../components/CVSectionSkills';
import '../components/CVSectionTools';
import '../components/CVSummaryJob';
import '../components/CVSummarySchool';
import '../components/CVSummarySkill';
import '../components/CVSummaryTool';

@customElement('page-cv')
export class PageCV extends LitElement {
  @property({ type: Array }) data = null
  @property({ type: Array }) education = []
  @property({ type: Array }) experiences = []
  @property({ type: Array }) skills = []
  @property({ type: Array }) tools = []

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
      `
    ]
  }

  connectedCallback(): void {
    super.connectedCallback();
    
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
  }
  
  render() {
    return html`
      <cv-section-edu content=${JSON.stringify(this.education)}></cv-section-edu>
      <cv-section-exp content=${JSON.stringify(this.experiences)}></cv-section-exp>
      <cv-section-skills content=${JSON.stringify(this.skills)}></cv-section-skills>
      <cv-section-tools content=${JSON.stringify(this.tools)}></cv-section-tools>
    `
  }
}
