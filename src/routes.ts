import { html } from 'lit';

import './components/PageSingle';
import './components/PageCV';

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
  }
];
