const express = require('express')
const app = express()
const porta = 3000

app.get('/', (require, response) => {
    response.send('Node JS')
})
app.get('/rota-de-teste', (require, response) => {
    response.json({Nome: 'Leandro', Idade: 19})
})

app.listen(porta, () => {console.log('Servidor rodando')})