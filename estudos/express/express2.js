const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Olá, mundo!')
})

app.listen(porta, ()=>{console.log('Servidor rodando')})