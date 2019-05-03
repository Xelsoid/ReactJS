import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

import App from './App';
import configureStore from './store';

function renderHTML(html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
      </head>
      <body>
        <div id="rootContainer">${html}</div>
        <script src="/js/main.js"></script>
      </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const storeInitialState = {};
    const htmlString = renderToString(
      <App
        Router={StaticRouter}
        location={req.url}
        context={context}
        store={configureStore(storeInitialState)}
      />);

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    res.send(renderHTML(htmlString));
  };
}
