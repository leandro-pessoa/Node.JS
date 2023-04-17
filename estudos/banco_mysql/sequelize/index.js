const Sequelize = require('sequelize')

//conexão com o banco de dados

const sequelize = new Sequelize('node_js', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(()=>{console.log('Conectado')})
    .catch((err)=>{console.log('Erro: ' + err)})


//criação de tabelas

const Usuarios = sequelize.define('usuarios', {
    nome: {type: Sequelize.STRING},
    sobrenome: {type: Sequelize.STRING},
    data_nascimento: {type: Sequelize.DATE},
    email: {type: Sequelize.STRING}
})

const Postagens = sequelize.define('postagens', {
    titulo: {type: Sequelize.STRING},
    content: {type: Sequelize.TEXT}
})

//Usuarios.sync({force: true}) --> criam as tabelas (exclua ou comente após a criação)
//Postagens.sync({force: true})

//inserção de dados na tabela

Postagens.create({
    titulo: 'Olá',
    content: 'Hellow world!!!'
})
