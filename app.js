const express = require('express'); // <-- returns a function
const morgan = require('morgan');
const mongoose = require('mongoose');

const Blog = require('./models/blog');
const lodash = require('lodash');
const { result } = require('lodash');

// express app

const app = express(); /*<-- invoking that function 
to create an instance of an express app
which we are storing in a var*/

// connect to mongoDB

const dbURI =
	'mongodb+srv://polka:WF9NFN6rOb2omBTz@cluster0.sgaoh.mongodb.net/nodeExpressBlog?retryWrites=true&w=majority';
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) /* <-- async in nature */
	.then((result) => {
		console.log('conncected to db');
		app.listen(5000);
	})
	.catch((error) => console.log(error));

// register view engine

app.set('view engine', 'ejs'); /* app.set() lets us configure app settings */

// middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// mongoose & mongo sandbox routes

//  routes

app.get('/', (req, res) => {
	res.redirect('/blogs');
});

app.get('/about', (req, res) => {
	res.render('about', { title: 'About' });
});

// blog routes

app.get('/blogs/create', (req, res) => {
	res.render('create', { title: 'Create a New Blog' });
});

app.get('/blogs', (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render('index', { title: 'All Blogs', blogs: result });
		})
		.catch((err) => console.log(err));
});

app.post('/blogs', (req, res) => {
	const blog = new Blog(req.body);
	// console.log(req.body);

	blog
		.save()
		.then((result) => {
			res.redirect('/blogs');
		})
		.catch((err) => console.log(err));
});

app.get('/blogs/:id', (req, res) => {
	const id = req.params.id;
	console.log(id);

	Blog.findById(id)
		.then((result) => {
			res.render('details', { blog: result, title: 'Blog Details' });
		})
		.then((err) => console.log(err));
});

app.delete('/blogs/:id', (req, res) => {
	const id = req.params.id;

	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/blogs' });
		})
		.catch((err) => {
			console.log(err);
		});
});
// 404 page

app.use((req, res) => {
	res.status(404).render('404', { title: 404 });
});
