var http = require('http');

var fs = require('fs');

fs.readFile('text.txt', function(err, data) {
  if (err) throw err;
  console.log(data);
});
