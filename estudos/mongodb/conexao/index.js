const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/teste01')
    .then(()=>{
        console.log('Conectado ao banco')
    })
    .catch((err)=>{
        console.log('Erro ao se conectar: ' + err)
    })

const usuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    nascimento: {
        type: Date,
        require: true
    }
})

mongoose.model('usuarios', usuarioSchema)

const Leandro = mongoose.model('usuarios')

new Leandro({
    nome: 'Leandro',
    email: 'leandro@gmail.com',
    nascimento: '2004-02-27'
}).save()
    .then(()=>{
        console.log('Usuário cadastrado com sucesso')
    })
    .catch((err)=>{
        console.log('!!!ERRO: ' + err)
    })