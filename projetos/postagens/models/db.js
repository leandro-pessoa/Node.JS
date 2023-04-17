const Sequelize = require('sequelize')

//conexão com o banco de dados
const sequelize = new Sequelize('node_js', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate()
    .then(() => {console.log('Conectado!')})
    .catch((err) =>  {console.log(err)}) 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
