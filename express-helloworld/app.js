var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/Alex', function(req, res) {
  res.send('Hello ALex Martinez!!!!!\n');
});
app.get('/Sebastian', function(req, res) {
  res.send('Hello Sebastian Martinez!!!!!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

