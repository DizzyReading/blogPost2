const express = require('express'); // <-- returns a function

// express app

const app = express(); /*<-- invoking that function 
to create an instance of an express app
which we are storing in a var*/

// register view engine

app.set('view engine', 'ejs'); /* app.set() lets us configure app settings */

// listen for requests

app.listen(5000);

app.get('/', (req, res) => {
	const blogs = [
		{ title: 'alt-J', snippet: 'English indie rock band' },
		{ title: 'Local Natives', snippet: 'American Indie rock band' },
		{ title: 'Syd Matters', snippet: 'French indie band' }
	];
	res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
	res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
	res.render('create', { title: 'Create' });
});

// 404 page

app.use((req, res) => {
	res.status(404).render('404', { title: 404 });
});
