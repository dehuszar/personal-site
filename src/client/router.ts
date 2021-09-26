import UniversalRouter from 'universal-router';
import {LitElement, html, render} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import list from './layouts/list';
import single from './layouts/single';

const url = "http://localhost:1313";

const getPageContext = (context) => {
  const { path, params, router } = context;
  return JSON.stringify({
    path,
    params,
    routes: router.root.children.map(r => ({
      name: r.name,
      path: r.path,
      children: r.children
    }))
  });
}

const renderPage = (layout, data, context) => 
  render(layout({
    pageContext: getPageContext(context),
    siteTitle,
    pageTitle: data.title,
    content: JSON.stringify(data)
  }), document.body);

let fetchData = async path => {
  let response = await fetch(path);
  let data = await response.json();
  return data.data;
}

const siteTitle = "Samuel deHuszar Allen"
const routes = [
  {
    name: 'home',
    path: '/',
    action: context => fetchData(`${url}/posts/index.json`)
      .then(data => renderPage(single, data, context))
  },
  {
    name: 'about',
    path: '/about',
    action: context => fetchData(`${url}/about/index.json`)
      .then(data =>
        renderPage(single, data, context)
      ),
      children: [{
        name: 'cv',
        path: '/about/cv',
        action: context => fetchData(`${url}/about/cv/index.json`)
          .then(data =>
            renderPage(single, data, context)
          ),
          children: [{
            name: 'education',
            path: '/about/cv/education',
            action: context => fetchData(`${url}/about/cv/education/index.json`)
              .then(data =>
                renderPage(list, data, context)
              )
          }, {
            name: 'experience',
            path: '/about/cv/experience',
            action: context => fetchData(`${url}/about/cv/experience/index.json`)
              .then(data =>
                renderPage(list, data, context)
              )
          }, {
            name: 'skills',
            path: '/about/cv/skills',
            action: context => fetchData(`${url}/about/cv/skills/index.json`)
              .then(data =>
                renderPage(list, data, context)
              )
          }]
      }]
  },
  {
    name: 'music',
    path: '/music',
    action: context => fetchData(`${url}/music/index.json`)
    .then(data => renderPage(single, data, context))
  },
  {
    name: 'posts',
    path: '/posts',
    action: context => fetchData(`${url}/music/index.json`)
    .then(data => renderPage(list, data, context))
  }
];

export default new UniversalRouter(routes);