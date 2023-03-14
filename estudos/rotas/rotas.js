const http = require('http')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((request, response)=>{
    response.writeHead(200, {
        'Content-Type' : 'text/html'
    })
    if(request.url == '/'){
        response.write('<h1>Seja bem vindo</h1>')
    }
    else if(request.url == '/cadastro'){
        response.write(
            '<label for="nome">Nome:</label></br><input type="text" placeholder="Digite seu nome" id="nome" autocomplete="off">'
        )
    }
    response.end()
})

servidor.listen(porta, host, ()=>{console.log('Servidor rodando')})
