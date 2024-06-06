const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'https://graphql-pokemon2.vercel.app',
      changeOrigin: true,
    })
  );
};
