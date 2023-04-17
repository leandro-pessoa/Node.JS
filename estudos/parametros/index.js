const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.get('/Hello/:nome', (req, res)=>{
    res.send('Hello ' + req.params.nome)
})


app.listen(porta, ()=>{console.log('Servidor rodando')})