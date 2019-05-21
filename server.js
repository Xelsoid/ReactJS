const express = require('express');
const next = require('next');

const PORT = 9090;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/movie', (req, res) => {
      const actualPage = '/movie';
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    });

    server.get('/movies', (req, res) => {
      const actualPage = '/index';
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    });

    server.get('/', (req, res) => {
      const actualPage = '/index';
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    });

    server.get('/*', (req, res) => {
      const actualPage = '/not-found';
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1)
  });
