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
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/blogs/create', (req, res) => {
	res.render('create');
});

// 404 page

app.use((req, res) => {
	res.status(404).render('404');
});
