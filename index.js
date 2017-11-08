const express = require('express')
const app = express()
var http = require('http').Server(app);

app.get('/', function(req, res) {
  res.send('<h1>Hello World!</h1>')
});

http.listen(7000, function() {
  console.log('listening on 7000...')
});