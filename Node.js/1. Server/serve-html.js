//serve-html.js
const http = require("http");

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(`
		<html>
			<head>
				<title>Html response</title>
			</head>
			<body style="background-color:#a64dff; color:white; text-align:center">
				<h1>Hello from <span style="color:yellow">Vishnu Pratap Singh</span></h1>
				<h3>This is my first Node.js assignment.</h3>
			</body>
		</html>
	`);
});

server.listen(3000, '127.0.0.1');
console.log("server is listening at port: 3000 and host: 127.0.0.0");
