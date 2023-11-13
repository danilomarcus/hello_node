var http = require('http');
var handle = require('./handle');
var calculate = require('./functions');

var events = require('events');
var emiter = new events.EventEmitter();

emiter.on('sayfn', say)

function say(){
    console.log('say something');
}

emiter.emit('sayfn')

// function handle(request, response){
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     response.write('<!DOCTYPE "html">');
//     response.write('<body>');
//     response.write('<h1>Hello World</h1>');
//     response.write('</body>');
//     response.write('</html>');
//     response.end('hello from http modulo')
// }

var server = http.createServer(handle);

server.listen(3000, () => {

    console.log('listening on port 3k')

    console.log(calculate.somar(1,2));
    console.log(calculate.multiplicar(1,2));

} )

