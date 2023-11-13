var querystring = require('querystring')

function handle(request, response){
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // teste com eventos definidos internamente
    var body = '';
    request.on('data', function(data){
        body += data.toString();
    });

    request.on('end', function(data){
        var decode = querystring.parse(body);
        console.log(decode);
    });

    // para testar basta enviar um postman POST com form-data
    // key - value (qualquer coisa :))

    response.write('<!DOCTYPE "html">');
    response.write('<body>');
    response.write('<h1>Hello World</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end('hello from http modulo')
}

module.exports = handle;