// http://stackoverflow.com/questions/2496710/nodejs-write-to-file
//var fs = require('fs');
//var stream = fs.createWriteStream("my_file.txt");
//stream.once('open', function(fd) {
//  stream.write("My first row\n");
//  stream.write("My second row\n");  
//});

/*
fs = require('fs');
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

*/
// this is from here
// http://docs.nodejitsu.com/articles/file-system/how-to-write-files-in-nodejs
var fs = require('fs');
fs.writeFile("Test.txt", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});