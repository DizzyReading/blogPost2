const mongoose = require('mongoose');

const Schema =
	mongoose.Schema; /* Schema is a constructor function thats gonna define the structure of the 
documents that we are gonna later store inside a collection. It's the thing that a Model 
wraps around */

const blogSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		snippet: {
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

// create a Model based on the Schema

const Blog = mongoose.model(
	'Blog',
	blogSchema
); /* <--sec arg is what type of what type 
of obj are we gonna store inside this collection
 */

module.exports = Blog;
