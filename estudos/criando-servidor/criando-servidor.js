const http = require("http")

http.createServer((request, response)=>{
    response.writeHead(200, {
        'Content-Type' : 'text/plain'
    })
    response.write('Leandro Pessoa')
    response.end()
}).listen(1337)