import { html } from 'lit';

import './components/PageSingle';
import './components/PageCV';
import './components/CVArticle';

import "urlpattern-polyfill";

export const routes = [
  {
    name: 'home',
    path: '/',
    skip: true,
    render: () => html`<page-single page="about"></page-single>`
  },
  {
    name: 'cv',
    path: '/cv',
    render: () => html`<page-cv></page-cv>`
  },
  {
    name: 'school',
    path: '/cv/education/:school',
    skip: true,
    render: ({school}) => html`<cv-article sectionType="education" school="${school}"></cv-article>`
  },
  {
    name: 'job',
    path: '/cv/experience/:job',
    skip: true,
    render: ({job}) => html`<cv-article sectionType="experience" job="${job}"></cv-article>`
  }
];
