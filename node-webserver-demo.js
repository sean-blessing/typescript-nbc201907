var http = require('http');

var server = http.createServer(function(request, response) {
    console.log("Hello there! Got a request!");
    response.write("Hi!");
    response.end();
});

server.listen(3000);