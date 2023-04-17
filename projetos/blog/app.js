// módulos
const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

// arquivos externos
const admin = require('./rotas/admin')

// sessão
app.use(session({
    secret: 'cursodenode',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

// middleware
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg') 
    res.locals.error_msg = req.flash('error_msg')
    next()
})

// config do body-parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//config do handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// config do mongoose
mongoose.Promise = global.Promisse
mongoose.connect('mongodb://127.0.0.1:27017/blogapp')
    .then(()=>{
        console.log('Conectado ao banco de dados')
    })
    .catch((err)=>{
        console.log('!!!ERRO: ' + err)
    })

// public
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next)=>{
    next()
})

// rotas
app.use('/admin', admin)


// outros
const porta = process.env.PORT || 3000
app.listen(porta, ()=>{console.log('Servidor rodando.')})