import { html } from "lit"
import { unsafeHTML } from "lit/directives/unsafe-html.js"
export const articleSchool = ({
  contents,
  degree,
  endYear,
  imageAlt,
  images,
  imageSrc,
  imageType,
  location,
  nav,
  sectionType,
  title,
}) => html`
  ${nav[sectionType]}
  <article>
    <h2>${title}</h2>
    <h4>${location} - ${degree}${Boolean(degree) && Boolean(endYear) ? ` - ` : ``}Class of ${endYear}</h4>
    ${unsafeHTML(contents.toString())}
  </article>
  <img class="${imageType}" src="${images[imageSrc]}" alt="${imageAlt}" />
`;