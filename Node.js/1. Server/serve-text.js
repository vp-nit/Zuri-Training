// serve-text
const http = require("http");

const host = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':"text/plain"});
    response.write("Hello Vishnu! \n");
    response.end("Server working succeessfully.");
});

server.listen(port, host);
console.log("server is listening at port: "+port+", host: " + host);
