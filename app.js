var http = require("http");

var server = http.createServer((request, response) => {
    // console.log(request.url, request.method);
    // console.log(response.statusCode);

    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.statusMessage = "OK";

    response.write("<h1>Anasayfa</h1>");
    response.write("<p>Urunler</p>");

    response.end();
});


server.listen(3000);

console.log("node.js server at port 3000");