import { css } from 'lit';

export const cvSectionStyles = css`
  :host {
    display: grid;
    gap: 1em 3em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lora', serif;
  }

  header {
    max-height: 3em;
  }

  header h3 {
    border-bottom: 1px solid black;
  }
`;
