const http = require('http');
const url = require('url');
const {createProxyMiddleware} = require('http-proxy-middleware')
const config = require('./proxy.config')

const server = http.createServer((req, res) => {
    const {pathname} = url.parse(req.url)
    console.log(pathname);
    
    const proxyPaths = Object.keys(config.server.proxy)
    if (proxyPaths.includes(pathname)) {
        const proxy=createProxyMiddleware(config.server.proxy[pathname])
        proxy(req, res)
        return
    }
    res.end('common server')


}).listen(8888, () => {
  console.log('server listening on port 8888');
});
