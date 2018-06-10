/* eslint-disable import/no-extraneous-dependencies */
const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');
const qs = require('query-string');

const bundler = new Bundler('src/index.html', {
  cache: false,
});

const app = express();

const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error('May I have an API_KEY to access Behance API?')
}

const pathOnly = pathWithQuery => pathWithQuery.split('?')[0];

const pathRewrite = (path, req) => {
  const newQuery = qs.stringify({
    ...req.query,
    api_key: apiKey,
  });
  const newPath = pathOnly(path).replace('/api', '/v2');
  return `${newPath}?${newQuery}`;
};

app.use(
  '/api',
  proxy({
    target: 'https://www.behance.net',
    changeOrigin: true,
    pathRewrite,
  }),
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));
