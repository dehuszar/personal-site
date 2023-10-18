import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import { animate } from "@lit-labs/motion";
import { classMap } from "lit/directives/class-map.js";


import './components/PageSingle';
import './components/PageCV';
import './components/CVArticle';

import "urlpattern-polyfill";

import './components/PageHeader';
import './components/NavPrimary';

import { mainStyles } from "./css/main.css.js";

const siteTitle = "Samuel deHuszar Allen"

@customElement("main-application")
export class App extends LitElement {
  static get styles() {
    return [
      mainStyles,
      css``
    ]
  }

  private _router = new Router(this, [
  {
    name: 'home',
    path: '/',
    skip: true,
    render: () => html`<page-single @update-title="${this.setTitle}" page="about"></page-single>`
  },
  {
    name: 'cv',
    path: '/cv',
    render: () => html`<page-cv @update-title="${this.setTitle}"></page-cv>`
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
]);

  @property()
  pageContext = {
    title: this.title,
    currentPath: window.location.pathname,
    routes: this._router.routes
  }
  @property({ type: String }) title = ""

  setTitle(e:CustomEvent) {
    this.title = e.detail.title;
  }

  render() {
    return html`
      <page-header siteTitle="${siteTitle}">
        <nav-primary pageContext=${JSON.stringify(this.pageContext)}></nav-primary>
      </page-header>
      <main>
        <header class="page-title">
          <h2>${this.title}</h2>
        </header>
        ${this._router.outlet()}
      </main>
    `
  }
}