const http = require('http')
const fs = require('fs')
const porta = 3000

const servidor = http.createServer((response, require) => {
    fs.appendFile('texto.txt', 'Node.JS', (error) => {
        if(error){
            throw error
        }
        else{
            console.log('Arquivo criado')
        }
    })
})

servidor.listen(porta, () => {console.log('Servidor rodando')})