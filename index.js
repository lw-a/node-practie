const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
  fs.readFile('index.html',function(err,data){
    if (err) throw err;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end;
  });
}).listen(8080);
