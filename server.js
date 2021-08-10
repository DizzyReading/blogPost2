const http = require('http');

const server = http.createServer((req, res) => {
	console.log('request made');
	console.log(req.url, req.method);
	/* info about url is gonna be very useful later 
  becuase we wanna send back a diff res (resposes) based on
  that route
  */

	// set header content type

	res.setHeader('Content-Type', 'text/html');

	res.write(
		'<head><link rel="stylesheet" href="#"></head>'
	); /* we can create our own html tags and 
  effectively replace the default one in the browser
  */

	res.write('<p>Hole to Another Universe</p>');
	res.write('<p>Arcadia Bay</p>');

	res.end();
});

server.listen(5000, 'localhost', () => {
	console.log('listening for requests on port 5000 ...');
});
