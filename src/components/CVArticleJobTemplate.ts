import { html } from "lit"
import { unsafeHTML } from "lit/directives/unsafe-html.js"
export const articleJob = ({
  contents,
  endYear,
  imageAlt,
  images,
  imageSrc,
  imageType,
  nav,
  sectionType,
  startYear,
  title,
}) => html`
  ${nav[sectionType]}
  <article>
    <h2>${title}</h2>
    <h4>${startYear} - ${endYear}</h4>
    ${unsafeHTML(contents.toString())}
  </article>
  <figure><img class="${imageType}" src="${images[imageSrc]}" alt="${imageAlt}" /></figure>
`;
