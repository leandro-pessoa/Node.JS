const http = require('http')
const porta = process.env.PORT || 3000

const evento = require('events')
const emissor = new evento.EventEmitter()

emissor.on('inicio', ()=>{console.log('Início do processamento')})
emissor.on('fim', ()=>{console.log('Fim do processamento')})

const server = http.createServer((require, response) => {
    emissor.emit('inicio')
    response.writeHead(200, {'Content-Type' : 'text/plain'})
    response.write('Site de teste')
    emissor.emit('fim')
    response.end()
})

server.listen(porta, ()=>{console.log('Server rodando')})