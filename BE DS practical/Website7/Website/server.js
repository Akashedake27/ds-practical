const http = require('http');
const fs = require('fs');

let data = "";

http.createServer((req, res) => {

    if(req.url == "/") {

        fs.readFile("index.html", (err, fileData) => {

            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(fileData);
            res.end();

        });

    }

    else if(req.url.startsWith("/post")) {

        let url = new URL(req.url, "http://localhost:3000");

        data = url.searchParams.get("msg");

        res.write("POST : Data Stored");
        res.end();

    }

    else if(req.url == "/get") {

        res.write("GET : " + data);
        res.end();

    }

    else if(req.url == "/delete") {

        data = "";

        res.write("DELETE : Data Deleted");
        res.end();

    }

}).listen(3000);

console.log("Server Running...");