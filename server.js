const http = require('http');

const server = http.createServer((req, res) => {
	console.log('request made');
	console.log(req.url, req.method);
	/* info about url is gonna be very useful later 
  becuase we wanna send back a diff res (resposes) based on
  that route
  */
});

server.listen(5000, 'localhost', () => {
	console.log('listening for requests on port 5000 ...');
});
