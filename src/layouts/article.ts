import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { fetchData } from '../lib/fetchData';

export default async () => {
  const data = await fetchData(`/data/pages.json`);
  const { contents, permalink, title } = data;
  
  const template = await html`
    <article>
      <h1><a href="${permalink}">${title}</a></h1>
      ${unsafeHTML(contents)}
    </article>
  `
  debugger
  return template;
}
