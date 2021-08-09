const fs = require('fs');

// reading files

fs.readFile('./docs/blog1.txt', (err, data) => {
	/* readFile() is asynchronous*/

	err ? console.log(err) : console.log(data.toString());
});

// writing files

fs.writeFile('./docs/blog1.txt', 'Hello Dizzy Reading!', () => {
	/* writeFile() is asynchronous too. Also,
  passing in a file path name that doesn't exist
  will create a new file from the given path.
  
  */
	console.log('console log file was written');
});

// directories

if (!fs.existsSync('./assets')) {
	// existsSync is not asynchronous
	//only if dir does not exist then make dir
	fs.mkdir('./assets', (err) => {
		err ? console.log(err) : console.log('folder created');
	});
} else {
	fs.rmdir('./assets', (err) => {
		// rmdir() is Async as well
		err ? console.log(err) : console.log('folder deleted');
	});
}

// delete files

if (fs.existsSync('./docs/deleteme.txt')) {
	fs.unlink('./docs/deleteme.txt', (err) => {
		err ? console.log(err) : console.log('file deleted');
	});
}

console.log('Rick Flag');
