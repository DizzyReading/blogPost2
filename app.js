const express = require('express'); // <-- returns a function

//express app

const app = express(); /*<-- invoking that function 
to create an instance of an express app
which we are storing in a var*/

// listen for requests

app.listen(5000);

app.get('/', (req, res) => {
	res.send(
		'<p>Home Page</p>'
	); /* <-- this automatically infers the TYPE of CONTENT 
  we are trying to send the browser and sets the Headers Content Type.
  Also, it also infers the STATUS CODE

  */
});
