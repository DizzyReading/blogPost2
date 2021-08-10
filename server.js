const http = require('http');

const server = http.createServer((req, res) => {
	console.log('request made');
});

server.listen(5000, 'localhost', () => {
	console.log('listening for requests on port 5000 ...');
});
