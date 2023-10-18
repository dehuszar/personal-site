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

    this.updateTitle()
  }

  updateTitle() {
    this.dispatchEvent(new CustomEvent("update-title", { 
      bubbles: true,
      detail: {
        title: this.title
      }
    }));
  }
  
  render() {
    return html`
      <article>
        ${unsafeHTML(this.contents)}
      </article>
    `
  }
}
