import UniversalRouter from 'universal-router';
import {LitElement, html, render} from 'lit';
import {customElement, property} from 'lit/decorators.js';


import home from './routes/home';
import about from './routes/about';
import music from './routes/music';
import posts from './routes/posts';

// import home from './routes/home';
const routes = [
  {
    path: '/', // optional
    action: () => render(home({}), document.body)
  },
  {
    path: '/about',
    action: () => render(about({}), document.body)
  },
  {
    path: '/music',
    action: () => render(music({}), document.body)
  },
  {
    path: '/posts',
    action: () => render(posts({}), document.body)
  }
];
export default new UniversalRouter(routes);