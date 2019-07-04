var fs = require('fs');

fs.readFile('example.txt', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
});

var fs1 = require('fs');

fs1.readFile('example.txt', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
});