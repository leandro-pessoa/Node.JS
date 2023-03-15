const http = require('http')
const fs = require('fs')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((require, response) => {
    fs.readFile('arquivos.html', (error, arquivo) => {
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write(arquivo)
        return response.end()
    })
})

servidor.listen(porta, host, ()=>{console.log('Servidor rodando')})