const http = require("http");
const path = require("path");
const fs = require("fs");
const mime = require("mime");

http
  .createServer((req, res) => {
    const { method, url } = req;
    // 静态资源处理都是使用GET方式
    if (method === "GET" && url.startsWith("/static")) {
      const filePath = path.join(process.cwd(), url);

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.end("Not Found");
        } else {
          console.log("GET static", filePath);
          const type = mime.getType(filePath);
          res.writeHead(200, {
            "Content-Type": type,
            "Cache-Control": "public, max-age=3600",
          });
          res.end(data);
        }
      });
    } else if (url.startsWith("/api")) {
      //动态资源
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Hello, World!" }));
    } else {
      // NOT Found
      res.statusCode = 404;
      res.end("Not Found");
    }
  })
  .listen(3000, () => {
    console.log("server is running");
  });
