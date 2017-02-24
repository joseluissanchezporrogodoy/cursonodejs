var http = require('http');

server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
    response.end('<h2>Wake up que paaaza, Neo...\n</h2>');
})

// arrancamos el servidor

server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en 127.0.0.1:1337');
