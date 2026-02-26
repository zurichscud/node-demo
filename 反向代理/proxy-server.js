const http = require('http');

http.createServer((request, response) => {

  response.end('proxy success');
}).listen(9999, () => {
  console.log('proxy server listening on port 9999');
});
