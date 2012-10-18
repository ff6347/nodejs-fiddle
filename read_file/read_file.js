var fs = require('fs');

var content;
// First I want to read the file
fs.readFile('test.json','utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = JSON.parse(data);

    // Invoke the next step here however you like
    console.log(content.name);   // Put all of the code here (not the best solution)
});

