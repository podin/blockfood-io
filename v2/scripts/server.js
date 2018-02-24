var express = require('express');
var path = require('path');

var app = express();

const distPath = path.join(__dirname, '../dist/')

app.use(express.static(distPath))

app.listen(3000)
console.log('Server ready on localhost:3000')