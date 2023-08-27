import { html, render } from 'lit';

import './components/StaticPage';

import "urlpattern-polyfill";

export const routes = [
  {
    name: 'home',
    path: '/',
    skip: true,
    render: () => html`<static-page page="about"></static-page>`
  }
];
