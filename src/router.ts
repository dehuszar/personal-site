import UniversalRouter from 'universal-router';
import {LitElement, html, render} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import cv from './layouts/cv';
import list from './layouts/list';
import article from './layouts/article';

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
  const {pathname} = context;
  const isHome = pathname === "/";
  const homePageSlug = "about";
  const homePage = data.filter(r => r.slug === homePageSlug);
  const filters = pathname.split('/').filter(segment => segment);

  const getPageContent = r =>
    r.type === "page"
    && r.slug === filters?.at(0);

  const getArticleList = r => r.type === filters?.at(1);

  const page = isHome
    ? homePage?.at(0)
    : data.filter(getPageContent).at(0);

  const articleList = filters?.at(1)
    ? data.filter(getArticleList)
    : data;

  const getSelectedArticle = r => r.slug === filters?.at(2)

  const article = isHome
    ? homePage?.at(0)
    : filters?.at(2)
      ? articleList.filter(getSelectedArticle).at(0)
      : undefined;
  
  return {
    page,
    articleList,
    article
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
    action: context => fetchData(`/data/pages.json`, context)
      .then(data =>
        renderPage(article, preparePageData(data, context), context)
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
                renderPage(article, preparePageData(data, context), context)
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
                renderPage(article, preparePageData(data, context), context)
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
                renderPage(article, preparePageData(data, context), context)
              )
          }
        ]
      }, {
        name: 'tools',
        parentPath: '/cv',
        path: '/tool',
        children: [
          {
            path: '',
            parentPath: '/tool',
            skip: true,
            action: context => fetchData(`/data/cv.json`, context)
              .then(data =>
                renderPage(list, preparePageData(data, context), context)
              )
          },
          {
            path: '/:tool',
            parentPath: '/tool',
            skip: true,
            action: context => fetchData(`/data/cv.json`, context)
              .then(data =>
                renderPage(article, preparePageData(data, context), context)
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
                        renderPage(article, preparePageData(data, context), context)
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