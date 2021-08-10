const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// set header content type

	res.setHeader('Content-Type', 'text/html');

	// send an html file

	fs.readFile('./views/index.html', (err, data) => {
		if (err) {
			console.log(err);
			res.end();
			/*if an error occurs we should always follow with 
      a res.end() after console.log() beacause otherwise we 
      are just going to keep the request hanging
      */
		}

		res.write(data); // sends res to browser
		res.end();
	});
});

server.listen(5000, 'localhost', () => {
	console.log('listening for requests on port 5000 ...');
});
