const express = require('express'); // <-- returns a function

//express app

const app = express(); /*<-- invoking that function 
to create an instance of an express app
which we are storing in a var*/

// listen for requests

app.listen(5000);

app.get('/', (req, res) => {
	// res.send(
	// 	'<p>Home Page</p>'
	// );

	res.sendFile('./views/index.html', {
		root: __dirname
	}); /* <-- we add a second argument (an opitons object) because
  by default express will look for an absolute path from the root of our computer. 
  This will have root as its property to specify what the './views/index.html' (first arg) 
  is relative to */
});

app.get('/about', (req, res) => {
	// res.send('<p>About Page</p>');
	res.sendFile('./views/about.html', { root: __dirname });
});
