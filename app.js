var http = require("http");

var server = http.createServer((request, response) => {
    // console.log(request.url, request.method);
    // console.log(response.statusCode);

    // response.setHeader("Content-Type", "text/html");
    // response.statusCode = 200;
    // response.statusMessage = "OK";

    // response.write("<h1>Anasayfa</h1>");
    // response.write("<p>Urunler</p>");

    if (request.url == '/') {
        response.writeHead(200, { "Content-Type": "text/html" });

        response.write(`
            <html>
                <head>
                    <title>Anasayfa</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Anasayfa</h1>
                </body>
            </html>`);

        response.end();
    }
    else if (request.url == '/blogs') {
        response.writeHead(200, { "Content-Type": "text/html" });

        response.write(`
            <html>
                <head>
                    <title>Blog</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Blog</h1>
                </body>
            </html>`);

        response.end();
    }
    else {
        response.writeHead(404, { "Content-Type": "text/html" });

        response.write(`
            <html>
                <head>
                    <title>404</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Sayfa Bulunamadı</h1>
                </body>
            </html>`);

        response.end();
    }
});


server.listen(3000);

console.log("node.js server at port 3000");