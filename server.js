const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	// set header content type

	res.setHeader('Content-Type', 'text/html');

	let path = './views/';
	switch (req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;

		case '/about':
			path += 'about.html';
			res.statusCode = 200;
			break;

		case '/about-me':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();
			break;

		default:
			path += '404.html';
			res.statusCode = 404;
			break;
	}

	// send an html file

	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
			/*if an error occurs we should always follow with 
      a res.end() after console.log() beacause otherwise we 
      are just going to keep the request hanging
      */
		}

		res.end(data);
		/* if we're sending ONLY ONE thing into res.write() 
    then we dont nedd res.write() we can just send the thing direcrtly into
    the res.end(thing) method*/
	});
});

server.listen(5000, 'localhost', () => {
	console.log('listening for requests on port 5000 ...');
});
