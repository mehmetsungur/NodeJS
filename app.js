var http = require("http");

var server = http.createServer((request, response) => {
    console.log(request.url, request.method);
    console.log(response.statusCode);
    response.end();
})


server.listen(3000);

console.log("node.js server at port 3000");