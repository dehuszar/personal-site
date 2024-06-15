import { css } from 'lit';

export const mainStyles = css`
  :host {
		/* this should get moved to a place where it can be animated between values on page change */
		background: rgba(100, 149, 237, 0.75); /* cornflower blue */
    display: grid;
    gap: 1em 3em;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 3em);
		height: 100vh;
    padding: 1em 2em;
		margin: 0;
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
