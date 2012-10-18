var fs = require('fs');

var content; // is this global now?
// First I want to read the file
fs.readFile('input.json','utf-8', function read(err, data) {
    if (err) {
        throw err;
    };
    
    content = JSON.parse(data);
    content.name+= " the magnificent";
    delete_file();
    write_json();
 
});


// why cant i call content here
console.log(content + " <-- outside of fs.readFile?");
console.log("but still executed before write_json?");
console.log("Must be that asynchron stuff");

console.log(" \n------------\n");

function write_json() {
    console.log(content);
fs.writeFile("output.json", JSON.stringify(content), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});  
  
};


function delete_file() {
    fs.unlink("output.json",function (err) {
      if (err) throw err;
      console.log('successfully deleted file');
    });
  }