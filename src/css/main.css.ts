import { css } from 'lit';

export const mainStyles = css`
  :host {
    display: grid;
    gap: 1em 3em;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 3em);
    padding: 0 2em;
  }

  main {
    display: grid;
    gap: 1em 3em;
    grid-column: span 12;
    grid-row: span 11;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(11, 3em);
  }

  header {
    grid-row-end: span 1;
    grid-column: span 12;
  }

  header h2 {
    line-height: 2em;
    margin: 0;
  }

  header h3 {
    text-decoration: underline;
  }
`;
