module.exports = {
    server:{
        proxy:{
            //代理配置，用于传入proxyMiddleware
            '/api': {
                target: 'http://localhost:9999', //转发的地址
                changeOrigin: true, //是否有跨域
            }
        }
    }
}
