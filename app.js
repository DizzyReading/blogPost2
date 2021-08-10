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

// redirects

app.get('/about-us', (req, res) => {
	res.redirect(
		'/about'
	); /* <-- under the hood express sends this res(ponse) 
  to the browser & forces it into a new request for '/about'
  */
});

// 404 page

app.use((req, res) => {
	/* <-- use this function for every incoming req regardless of url.
  Basically telling express if we dont get a match for any of the urls than respond 
  with a 404 page. Hence, it must be at the bottom of the file.

  Additionally, express as of now wont realize that this is some kind of error and
  wont change the STATUS CODE to 404. We will have to se that manually.

  */
	res.status(404).sendFile('/views/404.html', { root: __dirname });
});
