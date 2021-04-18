//serve-json.js
const http = require('http');

const jsonResponse = `{
	"name":"Vishnu Pratap Singh",
	"country":"India",
	"hobby":"Playing Badminton",
}`;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(jsonResponse) 
});

server.listen(3000, '127.0.0.1');
console.log("server is listening at port: 3000 and host: 127.0.0.0");			