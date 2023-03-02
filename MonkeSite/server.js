'use strict';
var http = require('http');
var port = process.env.PORT || 8080;

var http = require('http');
var fs = require('fs');

//modules
var dt = require('./JavaScript');

const PORT = 8080;

fs.readFile('./Page1.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT);
});


