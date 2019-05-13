import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

import App from './App';
import configureStore from './store';

function renderHTML(html, preLoadedState) {
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
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preLoadedState).replace(/</g, '\\\u003c')}
          </script>
        <script src="/js/main.js"></script>
      </body>
    </html>
  `;
}

const serverRenderer = () => {
  return (req, res) => {
    const store = configureStore();
    const context = {};

    const renderApp = () => {
      return (
        <App
          Router={StaticRouter}
          location={req.url}
          context={context}
          store={store}
        />
    )};

    store.runSaga().toPromise().then(() => {
      const htmlString = renderToString(renderApp());

      // context.url will contain the URL to redirect to if a <Redirect> was used
      // if (context.url) {
      //   res.writeHead(302, {
      //     Location: context.url,
      //   });
      //   res.end();
      //   return;
      // }
      const preLoadedState = store.getState();

      res.send(renderHTML(htmlString, preLoadedState));
    });

    renderToString(renderApp());
    store.close();
  };
};

export default serverRenderer;
