import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import { animate } from "@lit-labs/motion";
import { classMap } from "lit/directives/class-map.js";
import { routes } from './routes.ts';

import './components/PageHeader';
import './components/NavPrimary';

import { mainStyles } from "./css/main.css.js";

const siteTitle = "Samuel deHuszar Allen"

const getTitle = routes => routes.find(r => 
    r.path === window.location.pathname)?.name;

@customElement("main-application")
export class App extends LitElement {
  static get styles() {
    return [
      mainStyles,
      css``
    ]
  }

  private _router = new Router(this, routes);

  @property()
  pageContext = {
    title: getTitle(routes),
    currentPath: window.location.pathname,
    routes: routes
  }

  render() {
    return html`
      <page-header siteTitle="${siteTitle}">
        <nav-primary pageContext=${JSON.stringify(this.pageContext)}></nav-primary>
      </page-header>
      <main>
        <header class="page-title">
          <h2>${this.pageContext.title}</h2>
        </header>
        ${this._router.outlet()}
      </main>
    `
  }
}