const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Home page')
})
app.get('/login', (req, res)=>{
    res.send('Login')
})
app.get('/cadastro', (req, res)=>{
    res.send('Página de cadastro')
})


app.listen(porta, ()=>{console.log('Servidor rodando na porta ' + porta)})