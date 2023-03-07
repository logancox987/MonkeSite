

'use strict';
var http = require('http');
var port = process.env.PORT || 8080;

var http = require('http');
var fs = require('fs');

//modules
var dt = require('./main');

const PORT = 8080;
const PORT2 = 8081;




fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT);
});

fs.readFile('./enterName.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT2);
});

//fs.readFile('./enterName.html');
//fs.writeFile('./enterName.html');

//fs.readFile('./enterName.html', function (err, html) {

//    if (err) throw err;

//    http.createServer(function (request, response) {
//        response.writeHeader(200, { "Content-Type": "text/html" });
//        response.write(html);
//        response.end();
//    }).listen(PORT);
//});


