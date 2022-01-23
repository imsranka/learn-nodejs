const http = require("http");

const server = http.createServer((req, res) => {
  // request
  let { url, method, headers } = req;
  console.log(url, method);

  // sending data
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>Hello</title></head><body><h1>First page</h1></body></html>"
  );
  res.end();
});

server.listen(3000);
