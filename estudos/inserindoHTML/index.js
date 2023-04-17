const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Homepage')
})

app.get('/arquivo_html', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(porta, ()=>{console.log('Servidor rodando')})