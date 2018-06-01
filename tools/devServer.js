/* eslint-disable import/no-extraneous-dependencies */
const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');

const bundler = new Bundler('src/index.html', {
  cache: false,
});

const app = express();

app.use(
  '/api',
  proxy({
    target: 'https://www.behance.net',
    changeOrigin: true,
    pathRewrite: { '^/api': '/v2' },
  }),
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));
