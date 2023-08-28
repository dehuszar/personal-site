import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement('page-single')
export class PageSingle extends LitElement {
  @property({ type: String }) title = ''
  @property({ type: String }) contents = ''
  @property({ type: String }) page = ''
  @property({ type: Array }) data = null

  connectedCallback(): void {
    super.connectedCallback();
    
    if (!this.data) {
      this.fetchPageSingle();
    }
  }

  async fetchPageSingle() {
    const response = await fetch(`/data/pages.json`);
    const data = await response.json();
    this.data = data.find(p => p.slug === this.page);
    this.title = this.data.title;
    this.contents = this.data.contents;
  }
  
  render() {
    return html`
      <article>
        <h1>${this.title}</h1>
        ${unsafeHTML(this.contents)}
      </article>
    `
  }
}
