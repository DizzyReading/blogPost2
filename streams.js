const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' }); // turns to readable format
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//piping

readStream.pipe(writeStream); //same process but shorter
