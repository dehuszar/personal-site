import UniversalRouter from 'universal-router';
import {LitElement, html, render} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import list from './layouts/list';
import single from './layouts/single';

const url = "http://localhost:1313";

const getRoutes = c => {
  return {
    name: c.name,
    path: `${c.parentPath}${c.path}`,
    children: c.children ? c.children.filter(c => !c.skip).map(getRoutes) : undefined
  }
};

const getPageContext = (context) => {
  const { path, params, router } = context;
  return JSON.stringify({
    path,
    params,
    routes: router.root.children.filter(c => !c.skip).map(getRoutes)
  });
}

const renderPage = (layout, data, context) => 
  render(layout({
    pageContext: getPageContext(context),
    siteTitle,
    pageTitle: data.title,
    content: JSON.stringify(data)
  }), document.body);

let fetchData = async (path, context) => {
  const dynamicPath = path.includes("/:")
    ? path.replace(context.route.path, `/${context.params[context.route.path.replace("/:", "")]}`)
    : path;
  let response = await fetch(dynamicPath);
  let data = await response.json();
  return data.data;
}

const siteTitle = "Samuel deHuszar Allen"
const routes = [
  {
    name: 'home',
    path: '/',
    parentPath: '',
    action: context => fetchData(`${url}/index.json`, context)
      .then(data =>
        renderPage(single, data, context)
      ),
  },
  {
    name: 'cv',
    parentPath: '',
    path: '/cv',
          
    children: [
      {
        path: '',
        parentPath: '',
        skip: true,
        action: context => fetchData(`${url}/cv/index.json`, context)
          .then(data =>
            renderPage(list, data, context)
          )
      },
      {
        name: 'education',
        parentPath: '/cv',
        path: '/education',
        children: [
          {
            path: '',
            parentPath: '/education',
            skip: true,
            action: context => fetchData(`${url}/cv/education/index.json`, context)
              .then(data =>
                renderPage(list, data, context)
              )
          },
          {
            path: '/:school',
            parentPath: '/education',
            skip: true,
            action: context => fetchData(`${url}/cv/education/:school/index.json`, context)
              .then(data =>
                renderPage(single, data, context)
              )
          }
        ],
      }, {
        name: 'experience',
        parentPath: '/cv',
        path: '/experience',
        children: [
          {
            path: '',
            parentPath: '/experience',
            skip: true,
            action: context => fetchData(`${url}/cv/experience/index.json`, context)
              .then(data =>
                renderPage(list, data, context)
              )
          },{
            path: '/:job',
            parentPath: '/experience',
            skip: true,
            action: context => fetchData(`${url}/cv/experience/:job/index.json`, context)
              .then(data =>
                renderPage(single, data, context)
              )
          }
        ]
      }, {
        name: 'skills',
        parentPath: '/cv',
        path: '/skills',
        children: [
          {
            path: '',
            parentPath: '/skills',
            skip: true,
            action: context => fetchData(`${url}/cv/skills/index.json`, context)
              .then(data =>
                renderPage(list, data, context)
              )
          },
          {
            path: '/:skill',
            parentPath: '/skills',
            skip: true,
            action: context => fetchData(`${url}/cv/skills/:skill/index.json`, context)
              .then(data =>
                renderPage(single, data, context)
              )
          }
        ]
      }]
  },
  {
    name: 'music',
    path: '/music',
    parentPath: '',
    action: context => fetchData(`${url}/music/index.json`, context)
    .then(data => renderPage(single, data, context))
  },
  {
    name: 'posts',
    path: '/posts',
    parentPath: '',
    action: context => fetchData(`${url}/music/index.json`, context)
    .then(data => renderPage(list, data, context))
  }
];

export default new UniversalRouter(routes);