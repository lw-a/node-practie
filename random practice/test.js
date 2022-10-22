// import { URL } from 'node:url';
const http = require('http');
const dt = require('./datemodule');
const url = require('url');
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) { // append new content
  if (err) throw err;
  console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) { // open for writing
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) { // replaces previous content
  if (err) throw err;
  console.log('Saved!');
});

fs.unlink('mynewfile2.txt', function (err) { // delete file
  if (err) throw err;
  console.log('File deleted!');
});

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) { // rename file
  if (err) throw err;
  console.log('File Renamed!');
});

const myURL = new URL('/foo', 'https://example.org/');
console.log(myURL)
myURL.hash = 'baz';
console.log(myURL.href);

//Create an event handler:
const myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

http.createServer(function (req, res) {
//   fs.readFile('test.html', function(err, data) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // res.write("The date and time are currently: " + dt.myDateTime());
//   // res.write(req.url);
//   // const q = url.parse(req.url, true).query;
//   // const txt = q.year + " " + q.month;
//   // res.end(txt);
//   res.write(data);
//   return res.end();
// });
const q = url.parse(req.url, true);
const filename = "." + q.pathname;
fs.readFile(filename, function(err, data) {
  if (err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
});
}).listen(8080);
