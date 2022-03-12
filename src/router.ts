import UniversalRouter from 'universal-router';
import {LitElement, html, render} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import cv from './layouts/cv';
import list from './layouts/list';
import single from './layouts/single';

const siteTitle = "Samuel deHuszar Allen"

const getRoutes = c => {
  return {
    name: c.name,
    path: `${c.parentPath}${c.path}`,
    children: c.children ? c.children.filter(c => !c.skip).map(getRoutes) : undefined
  }
};

const getPageContext = (context) => {
  const { path, params, parentPath, router } = context;
  return JSON.stringify({
    path,
    parentPath,
    params,
    routes: router.root.children.filter(c => !c.skip).map(getRoutes)
  });
}

const preparePageData = (data, context) => {
  const filters = context.pathname.split('/').filter(segment => segment)
  const page = data.filter(r => r.type === "page" && r.slug === filters[0])[0];
  const type = filters[1] ? data.filter(r => r.type === filters[1]) : data;
  const single = filters[2] ? type.filter(r => r.slug === filters[2])[0] : undefined;

  return {
    page,
    type,
    single
  }
}

const renderPage = (layout, data, context) => 
  render(layout({
    pageContext: getPageContext(context),
    siteTitle,
    pageTitle: data.title,
    content: JSON.stringify(data)
  }), document.body);

let fetchData = async (path, context) => {
  let dynamicPath = path;
  
  if (path.includes("/:")){
    context.params.entries.forEach(([k, v]) => dynamicPath = dynamicPath.replace(`:${k}`, `${v}`));
  }

  let response = await fetch(dynamicPath);
  let data = await response.json();
  return data;
}

const routes = [
  {
    name: 'home',
    path: '/',
    parentPath: '',
    skip: true,
    action: context => fetchData(`/data/posts.json`, context)
      .then(data =>
        renderPage(single, preparePageData(data, context), context)
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
        action: context => fetchData(`/data/cv.json`, context)
          .then(data =>
            renderPage(cv, preparePageData(data, context), context)
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
            action: context => fetchData(`/data/cv.json`, context)
              .then(data =>
                renderPage(list, preparePageData(data, context), context)
              )
          },
          {
            path: '/:school',
            parentPath: '/education',
            skip: true,
            action: context => fetchData(`/data/cv.json`, context)
              .then(data =>
                renderPage(single, preparePageData(data, context), context)
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
            action: context => fetchData(`/data/cv.json`, context)
              .then(data =>
                renderPage(list, preparePageData(data, context), context)
              )
          },{
            path: '/:job',
            parentPath: '/experience',
            skip: true,
            action: context => fetchData(`/data/cv.json`, context)
              .then(data =>
                renderPage(single, preparePageData(data, context), context)
              )
          }
        ]
      }, {
        name: 'skills',
        parentPath: '/cv',
        path: '/skill',
        children: [
          {
            path: '',
            parentPath: '/skill',
            skip: true,
            action: context => fetchData(`/data/cv.json`, context)
              .then(data =>
                renderPage(list, preparePageData(data, context), context)
              )
          },
          {
            path: '/:skill',
            parentPath: '/skill',
            skip: true,
            action: context => fetchData(`/data/cv.json`, context)
              .then(data =>
                renderPage(single, preparePageData(data, context), context)
              )
          }
        ]
      }]
  },
  {
    name: 'music',
    path: '/music',
    parentPath: '',
    action: context => fetchData(`/data/music.json`, context)
    .then(data => renderPage(list, preparePageData(data, context), context))
  },
  {
    name: 'posts',
    path: '/posts',
    parentPath: '',
    children: [
      {
        path: '',
        parentPath: '/posts',
        skip: true,
        action: context => fetchData(`/data/posts.json`, context)
          .then(data =>
            renderPage(list, preparePageData(data, context), context)
          )
      },{
        path: '/:year',
        parentPath: '/posts',
        skip: true,
        children: [
          {
            path: '',
            parentPath: '/:year',
            children: [
              {
                path: '/:month',
                parentPath: '/:year',
                skip: true,
                children: [
                  {
                    path: '',
                    parentPath: '/:month',
                    skip: true
                  },{
                    path: '/:post',
                    parentPath: '/:month',
                    skip: true,
                    action: context => fetchData(`/data/posts.json`, context)
                      .then(data =>
                        renderPage(single, preparePageData(data, context), context)
                      )
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default new UniversalRouter(routes);