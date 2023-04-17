const express = require('express')
const cors = require('cors')
const app = express()
const porta= process.env.PORT || 3000
const bodyParser = require('body-parser')
const postagens = require('./models/Post')

//config do cors
app.use(cors())

//config do body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/get', (req, res)=>{
    postagens.findAll()
        .then((posts)=>{
            res.send(posts)
        })
        .catch((err)=>{
            console.log('!!!ERRO: ' + err)
        })
})

app.post('/postar', (req, res)=>{
    const titulo = req.body.titulo
    const conteudo = req.body.conteudo
    postagens.create({
        titulo: titulo,
        conteudo: conteudo
    })
        .then(()=>{
            console.log('Post enviado com sucesso!')
        })
        .catch((err)=>{
            console.log('!!!ERRO: ' + err)
        })
})

app.put('/excluir', (req, res)=>{
    const { pk } = req.body
    postagens.destroy({
        where: {
            id: pk
        }
    })
        .then(()=>{
            console.log('Post deletado com sucesso!')
        })
        .catch((err)=>{
            console.log('!!!ERRO: ' + err)
        })
})

app.listen(porta, ()=>{console.log('Servidor rodando.')})